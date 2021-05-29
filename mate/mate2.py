# -*- coding: utf-8 -*-
"""
Created on Wed May 12 22:12:45 2021

@author: LMCS
"""

import pandas as pd
import matplotlib.pyplot as plt

workbook1 = "peliculas.xlsx"

df = pd.read_excel(workbook1)
print(df.head())
valores = df[["Title","Votes"]]
print(valores)
ax=valores.plot.bar(x="Title",y="Votes",
                    rot=0, color="orange" )
plt.show()

