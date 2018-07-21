#-----------------------Definición de la clase---------------------
class PrimeNumbers
	def initialize(r_min,r_max)
	    @r_min = r_min
	    @r_max = r_max
	    @e = 0
	end
	def getE
		return @e
	end
   	def getNumbers
   		lock = true
   		num = []
   		@e=0
   		while lock do
	   		if (@r_min >= @r_max || @r_max.to_i < 0 || @r_min.to_i < 0)
	   			puts "[X]Rango inválido!"
		   		lock = false
		   		@e=1
			else
				a = 0
				array = @r_min..@r_max
				for i in array do
					if i.to_i > 1
						modez = 0
						k = i.to_i-1
						for j in 2..k do
							if i.to_i%j == 0
								modez = 1	
							end
						end
						if modez == 0
							num[a] = i.to_i
							a += 1
						end
					end
				end
				lock = false	
			end
		end
		if @e == 0
			puts "[O]Los numeros primos en el rango [#{@r_min},#{@r_max}] son:"
			puts num
		end
	end
end

#-----------------Hacer la pregunta , crear objeto y responder--------------
lock = true
while lock do
	puts "[!]Ingrese el valor del limite míninmo"
	r_min = gets.chomp
	puts "[!]Ingrese el valor del limite máximo"
	r_max = gets.chomp
	nump = PrimeNumbers.new(r_min,r_max)
	nump.getNumbers
	if nump.getE == 0
		lock = false
	end
end

puts "done!"


