import pandas as pd
from pandas import ExcelWriter

df = pd.DataFrame({'MES': ["ENERO", "FEBRERO", "MARZO","ABRI","MAYO"],
                   'DIA': ['01', '05', '10', '15',"20","25","30"],
                   'AÑO': ['1970', '1980', '1990', '2000']})
df = df[['MES', 'DIA', 'AÑO']]

writer = ExcelWriter('/ruta/ejemplo.xlsx')
df.to_excel(writer, 'Hoja de datos', index=False)
writer.save()