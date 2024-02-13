import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Load the dataset
placements = pd.read_csv('placement.csv')  # Replace 'placements.csv' with your actual file name

# One-hot encoding for categorical variables
placements = pd.get_dummies(placements, columns=['Gender', 'Stream'])

# Convert Hostel and HistoryOfBacklogs to categorical type
placements['Hostel'] = placements['Hostel'].astype('category')
placements['HistoryOfBacklogs'] = placements[ 'HistoryOfBacklogs'].astype('category')

# Display the first few rows of the dataset
print(placements.head())

# Summary statistics of numerical variables
print(placements.describe())