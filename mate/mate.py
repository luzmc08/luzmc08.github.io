import pandas as pd
import matplotlib.pyplot as plt

workbook1 = "peliculas.xlsx"

df = pd.read_excel(workbook1)
print(df.head())
valores = df[["Title","Runtime (Minutes)"]]
print(valores)
ax=valores.plot.bar(x="Title",y="Runtime (Minutes)",
                    rot=0, color="orange" )
plt.show()
