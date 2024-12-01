import pandas as pd

# Load ISO country code dataset
country_codes_df = pd.read_csv('RawData/wikipedia-iso-country-codes.csv')

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
    'RawData/all_upwork_jobs_2024-02-07-2024-03-24.csv',
    'RawData/all_upwork_jobs_2024-03-24-2024-05-21.csv',
    'RawData/all_upwork_jobs_2024-05-21-2024-07-25.csv'
]

# Read each CSV file and store the DataFrames in a list
dfs = [pd.read_csv(file) for file in csv_files]

# Concatenate all DataFrames vertically
df = pd.concat(dfs, ignore_index=True)

# Drop duplicates
df = df.drop_duplicates(subset='title', keep='first')

# Drop NaN in hourly_low and country columns
df = df.dropna(subset=['hourly_low', 'country'])

# Normalize the country name according to ISO codes
df['country'] = df['country'].apply(normalize_country)

# Keep is_hourly = TRUE only
df = df[df['is_hourly'] == True]

# Keep minimum rates above $7.25 (US Federal Minimum Wage)
df = df[df['hourly_low'] >= 7.25]

# Convert published_date to datetime
df['published_date'] = pd.to_datetime(df['published_date'])

# Extract year, month, day, hour, minute, and second
df['year'] = df['published_date'].dt.year
df['month'] = df['published_date'].dt.month
df['day'] = df['published_date'].dt.day
df['hour'] = df['published_date'].dt.hour
df['minute'] = df['published_date'].dt.minute
df['second'] = df['published_date'].dt.second

# Calculate seconds after midnight
df['seconds_after_midnight'] = (df['hour'] * 3600) + (df['minute'] * 60) + df['second']

# Save new csv
df.to_csv('All_Upwork_Jobs_Cleaned_Stage1.csv', index=False)
