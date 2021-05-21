# -*- coding: utf-8 -*-
"""
Created on Wed May 12 22:12:45 2021

@author: LMCS
"""
import pandas as pd
import matplotlib.pyplot as plt

df=pd.read_excel ("peliculas.xlsx", index_col="Rank")
"""df1=df.groupby("year").mean()"""
df1=df.groupby("Year").agg({"Votes": "sum"})
print(df1.head(11))
grouped=df1
grouped["Votes"].plot.pie()
plt.title("Tabla Year vs Sumatoria votos")
plt.show()
