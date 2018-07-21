
a=[ '000000',
	'000001', 
	'000010', 
	'000011', 
	'000100', 
	'000101', 
	'000111', 
	'001000', 
	'001001',
	'001010',
	'001011',
	'001100',
	'001101',
	'001110',
	'001111',
	'010000',
	'010001',
	'010010',
	'010011',
	'010100',
	'010101',
	'010110',
	'010111',
	'011000',
	'011001',
	'011010',
	'011011',
	'011100',
	'011101',
	'011110',
	'011111',
	'100001',
	'100010',
	'100011',
	'100100',
	'100101',
	'100110',
	'100111',
]

b=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l",
	"m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"," "]
dict = Hash.new
puts "[!]Va codificar o decodificar?(1=cod,0=dec)"
choice = gets.chomp
if choice == "1"
	acum=0;
	for i in b do 
		dict[i]=a[acum]
		acum+=1
	end
	puts "[!]Ingrese la/s palabra/s:"
	pac = gets.chomp
	pac = pac.split(//)

	for i in pac 
		puts dict[i]
	end
elsif choice == "0"
	acum=0;
	for i in a do 
		dict[i]=b[acum]
		acum+=1
	end
	puts "[!]Ingrese el/los código/s [separado por espacio]:"
	pac = gets.chomp
	pac = pac.split(' ')

	for i in pac 
		printf dict[i]
	end
	puts ''

else 
	puts "¡Usted es una mala persona!"
end
	
#puts dict

