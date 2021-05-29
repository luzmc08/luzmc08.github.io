import matplotlib.pyplot as plt
import pandas as pd

libro = "Sala6.xlsx"
hoja = "MILLONARIOS"

df = pd.read_excel(libro, sheet_name=hoja)
print(df.head())

valores = df[["Nombre","Edad","New Worth (Billions)"]]
print(valores)

ax=valores.plot(x="Nombre", y=["Edad","New Worth (Billions)"], marker=".")

plt.xlabel("Millonarios")
plt.ylabel("Edad  y Valor Neto (Billones)")
plt.title("Millonarios en el Mundo")
plt.grid()
plt.legend()
plt.show()
