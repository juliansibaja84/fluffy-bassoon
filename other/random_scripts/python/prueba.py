def suma2numeros(A,B):
	resultado = A + B
	return resultado

nota1 = input("digite la primera nota: ")
nota2 = input("digite la segunda nota: ")
nota3 = input("digite la tercera nota: ")
nota4 = input("digite la cuarta nota: ")
promedio = (float(nota1)+float(nota2)+float(nota3)+float(nota4))/4
print("El promedio es: "+str(promedio))

if promedio < 3:
	print("Perdiste la materia ¡Bruto!")
elif promedio == 3:
	print("Pasaste raspao")
else:
	print("No perdiste la materia ¡Inteligente!")




