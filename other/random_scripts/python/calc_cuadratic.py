print("[!] EL siguiente programa es para resolver una ecuación cuadratica de la forma: \n===> [ax² + bx + c = 0]")
a = float(input("Digite a: "))
b = float(input("Digite b: "))
c = float(input("Digite c: "))

x1 = (-b+(b**2-4*a*c)**(1/2))/(2*a)
x2 = (-b-(b**2-4*a*c)**(1/2))/(2*a)

print("Las raices o ceros de la ecuación son x1 = "+str(x1)+" y x2 = "+str(x2))