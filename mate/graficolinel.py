import matplotlib.pyplot as plt
x1=[1,2,3]
y1=[5,7,4]
x2=[1,2,3]
y2=[7,5,6]
plt.plot(x1,y1,label='Tipo 1')
plt.plot(x2,y2,label='Tipo 2') 
plt.xlabel('Eje X')  
plt.ylabel('Eje Y')  
plt.title('Grafica lineal')  
plt.legend()
plt.show()

