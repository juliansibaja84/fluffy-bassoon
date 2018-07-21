#----------------Definición de la clase------------------------
class Student
	def initialize(nm)
	    @name = nm
	    @evals =  0
	    @weights = 0
	    @grades = 0
	    @e = 0
	end
	#-------------------Getters and Setters---------------------
	def getEvals
		if @evals == 0
			puts "A el estudiante #{@name} no se le ha asignado el numero de evaluaciones"
		else
			return @evals
		end
	end
	def setEvals(evals)
		@evals = evals
	end
	def getWeights
		if @weights == 0
			puts "[X]A el estudiante #{@name} no se le ha asignado los pesos de las evaluaciones"
		else
			return @weights
		end
	end
	def setWeights(weights)
		@e = 0
		if @evals.to_i != weights.length
			puts "[X]El numero de evaluaciones y de pesos de asignaturas no concuerdan"
			@e = 1
		else
			lock0 = true
			while lock0 do
				cont = 0
				weights.each do |w| 
					w = w.to_i 
				end
		        for i in weights do
		        	cont += i.to_i
		        end
		        if cont != 100
		        	puts "[X]Los pesos de las asignaturas no suman 100"
		        	@e = 1
		        	lock0 = false
		        else
		            @weights = weights
					lock0 = false
		        end
			end
		end
	end
	def getGrades
		if @grades == 0
			puts "[!]A el estudiante #{@name} no se le ha asignado las notas de las evaluaciones"
		else
			return @grades
		end
	end
	def setGrades(grades)
		@grades = grades
	end
	def getE
		return @e
	end
	#---------------------Other methods-----------------------
	def getStatus
		if @grades == 0
			puts "[!]A el estudiante #{@name} no se le ha asignado las notas de las evaluaciones"
		else
			prom = 0
			for i in 0..(@grades.length-1) do
				prom += ((@grades[i].to_f)*(@weights[i].to_f))/100
			end
			puts "[0]El estudiante #{@name} tiene promedio de #{prom}"
			if prom < 3 
				puts "[!]Ha perdido la materia"
			end
		end
	end

end

#-----------------------Script------------------------
puts "[!]Ingrese el nombre del estudiante"
nm = gets.chomp
s1 = Student.new(nm)
puts "[!]Ingrese el número de evaluaciones"
evals = gets.chomp
s1.setEvals(evals)
lock = true;
while lock do 
	weights = []
	a = 0
	evals = evals.to_i
	for	i in 1..evals do
		puts "[!]Ingrese el porcentaje para la #{i}° evaluación"
		weights[a] = gets.chomp
		a += 1
	end
	s1.setWeights(weights)
	if s1.getE == 0
		grades = []
		a = 0	
		for	i in 1..evals do
			puts "[!]Ingrese la nota para la #{i}° evaluación"
			grades[a] = gets.chomp
			a += 1
		end
		s1.setGrades(grades)
		lock = false
	end
end

s1.getStatus
puts "done!"
