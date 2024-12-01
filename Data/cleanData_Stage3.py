import pandas as pd

# Load ISO country code dataset
country_codes_df = pd.read_csv('wikipedia-iso-country-codes.csv')

# Create a mapping between country full name and 3 letter code
country_mapping = pd.Series(country_codes_df['English short name lower case'].values, index=country_codes_df['Alpha-3 code']).to_dict()

# Normalize client_country column
def normalize_country(country):
    if country in country_mapping:  # If country is a 3-letter code
        return country_mapping[country]
    elif country in country_mapping.values():  # If country is already a full name
        return country
    else:
        return None  # Mark as invalid

# List of CSV file paths
csv_files = [
    'Final_Upwork_Dataset.csv'
    # Add more files as needed
]

# Read each CSV file and store the DataFrames in a list
dfs = [pd.read_csv(file) for file in csv_files]

# Concatenate all DataFrames vertically
df = pd.concat(dfs, ignore_index=True)

# Drop duplicates
df = df.drop_duplicates(subset='Job Title', keep='first')

# Drop NaN in client_country, hourly_rate, and hourly_low columns
df = df.dropna(subset=['EX_level_demand', 'Client_Country', 'Hourly_Rate', 'Start_rate'])

# Normalize the country name according to ISO codes
df['Client_Country'] = df['Client_Country'].apply(normalize_country)

# Keep hourly rate jobs only
df = df[df['Payment_type'] == 'Hourly']

# Remove '$' and convert to numeric
df['Start_rate'] = df['Start_rate'].str.replace('$', '', regex=False)  # Remove '$'
df['Start_rate'] = pd.to_numeric(df['Start_rate'])  # Convert to float or integer
df['End_rate'] = df['End_rate'].str.replace('$', '', regex=False)  # Remove '$'
df['End_rate'] = pd.to_numeric(df['End_rate'])  # Convert to float or integer

# Keep minimum rates above $7.25 (US FederaL Minimum Wage)
df = df[df['Start_rate'] >= 7.25]

# Save new csv
df.to_csv('Final_UpWork_Dataset_Cleaned_Stage2.csv', index=False)
