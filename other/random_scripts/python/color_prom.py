blanco = [255,255,255]
azul = [0,0,255]
rojo = [255,0,0]
amarillo = [255,255,94]
verde = [142,255,142]
naranja = [255,179,0]
morado = [120,0,255]
negro = [0,0,0]

colorlist = [naranja,naranja,verde,morado,verde]
final = [0,0,0]

for color in colorlist:
	final[0] += color[0]
	final[1] += color[1]
	final[2] += color[2]

for i in range(len(final)):
	final[i] = final[i]/len(colorlist)

print(final)

