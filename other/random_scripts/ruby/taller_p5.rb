#----------------Definición de la clase------------------------
class Operation
	def factorial(value)
		facto = 1;
		for i in 2..value.to_i do
			facto = i*facto		
		end
		return facto
	end
	def euler
		e = 1.0
		for i in 1..100 do
			e += 1.0/factorial(i)	
		end
		return e
	end
	def eulerx(value)
		ex = 1.0
		for i in 1..100 do
			ex += (value.to_f**i)/factorial(i)	
		end
		return ex
	end
end
#----------------------Script-----------------------
lock = true
while lock do
	puts "[!]Seleccione la operación a realizar"
	puts "1. Factorial"
	puts "2. Euler"
	puts "3. Euler a la x"
	option = gets.chomp
	if option == "1"
		puts "[O]Ha seleccionado Factorial"
		puts "[!]Ingrese un entero no negativo"
		entero = gets.chomp
		if entero.to_i < 0
			puts "[X]El valor ingresado es menor que 0"
		else
			op = Operation.new
			facto = op.factorial(entero)
			puts "[O]El factorial de #{entero} es igual a: #{facto}"
			puts "done!"
		end	
		lock = false
	elsif option == "2"
		puts "[O]Ha seleccionado Euler"
		op = Operation.new
		e = op.euler
		puts "[O]El valor de la constante euler es: #{e}"
		puts "done!"
		lock = false
	elsif option == "3"
		puts "[O]Ha seleccionado Euler a la x"
		puts "[!]Ingrese el valor de x"
		value = gets.chomp
		op = Operation.new
		ex = op.eulerx(value)
		puts "[O]El valor de e^#{value} es igual a: #{ex}"
		puts "done!"
		lock = false
	else
		puts "[X]No ha seleccionado ninguna opcion válida"
		puts "[!]Si desea volver a la selección escriba 1 y presione enter"
		option = gets.chomp
		if option != "1"
			puts "Saliendo..."
			lock = false
		end
	end
end


