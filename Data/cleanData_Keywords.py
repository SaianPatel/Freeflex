import pandas as pd

# Load your CSV with job titles
df = pd.read_csv('All_Upwork_Jobs_Cleaned_Stage1.csv')  # Replace with your file path

# Function to load keywords from a .txt file
def load_keywords(file_path):
    with open(file_path, 'r') as f:
        keywords = f.read().splitlines()  # Read lines and remove trailing newlines
    return keywords

# Load the keywords for each category from CSV files
developer_keywords = load_keywords('Developer_keywords.txt')
data_science_keywords = load_keywords('DataScience_keywords.txt')
marketing_keywords = load_keywords('Marketing_keywords.txt')
three_d_keywords = load_keywords('3D_keywords.txt')

# Function to categorize job titles based on keywords
def categorize_job_title(title):
    title = title.lower()  # Convert to lowercase for case-insensitive matching
    if any(keyword.lower() in title for keyword in developer_keywords):
        return 'Developer'
    elif any(keyword.lower() in title for keyword in data_science_keywords):
        return 'Data Science'
    elif any(keyword.lower() in title for keyword in marketing_keywords):
        return 'Marketing'
    elif any(keyword.lower() in title for keyword in three_d_keywords):
        return '3D'
    else:
        return 'Other'

# Apply the categorization function to the 'Job Title' column
df['Category'] = df['title'].apply(categorize_job_title)

# Save the updated DataFrame to a new CSV file
df.to_csv('categorized_jobs3.csv', index=False)

# Optionally, preview the first few rows of the updated DataFrame
print(df.head())
