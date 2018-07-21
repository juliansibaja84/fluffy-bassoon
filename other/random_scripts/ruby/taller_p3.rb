#----------------Definición de la clase------------------------
class Encryption
	def initialize(value)
	    @value = value.to_s
	end

	def getValue
		return @value
	end
	def setValue(value)
		@value = value
	end

	def encrypt
		v1 = (@value[0].to_i + 7) % 10
		v2 = (@value[1].to_i + 7) % 10
		v3 = (@value[2].to_i + 7) % 10
		v4 = (@value[3].to_i + 7) % 10
		@value = v3.to_s+v4.to_s+v1.to_s+v2.to_s
		puts "[O]El numero cifrado es: #{@value}"
	end
end
#----------------------Script-----------------------
puts "[!]Ingrese un entero de 4 dígitos"
entero = gets.chomp
verificator = entero.to_i/1000
if verificator < 1 || verificator >= 10
	puts "[X]El valor ingresado no es de 4 dígitos"
else
	dte = Encryption.new(entero)
	dte.encrypt
	puts "done!"
end
