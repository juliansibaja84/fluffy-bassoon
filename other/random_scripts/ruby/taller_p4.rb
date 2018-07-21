#----------------Definición de la clase------------------------
class DeEncryption
	def initialize(value)
	    @value = value.to_s
	end

	def getValue
		return @value
	end
	def setValue(value)
		@value = value
	end

	def deEncrypt
		@value = @value[2]+@value[3]+@value[0]+@value[1]	
		v=[@value[0].to_i,@value[1].to_i,@value[2].to_i,@value[3].to_i]
		for i in 0..3 do
			if v[i] == 3
				v[i] = 0
			elsif v[i] >= 7
				v[i] = v[i] - 7
			elsif v[i] <= 6
				v[i] = v[i] + 3
			end
		end
		@value = v[0].to_s+v[1].to_s+v[2].to_s+v[3].to_s
		puts "[O]El numero decifrado es: #{@value}"
	end
end
#----------------------Script-----------------------
puts "[!]Ingrese un entero de 4 dígitos"
entero = gets.chomp
if entero.length != 4
	puts "[X]El valor ingresado no es de 4 dígitos"
else
	dte = DeEncryption.new(entero)
	dte.deEncrypt
	puts "done!"
end