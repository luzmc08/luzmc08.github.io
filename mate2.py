import pandas as pd
import matplotlib.pyplot as plt

workbook1 = "DATOS1.xlsx"

df = pd.read_excel(workbook1)
print(df.head())
valores = df[["DATOS GENERALES","AÑO"]]
print(valores)
ax=valores.plot.bar(x="DATOS GENERALES",y="AÑO",
                    rot=0, color="orange" )
plt.show()
