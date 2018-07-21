def teo_red(x):
	x = str(x)
	n = len(x)

	if n <= 1 :
		return x
	else:
		while n > 1 :
			red = 0
			for i in x:
				red += int(i)
			n = len(str(red))
			x = str(red)
		return red

def teo_ad(y):
	for i in range(y+1):
		ad = 0
		for j in range(i+1):
			ad += j
		#print(ad)
		adr = teo_red(ad)
		print("'Original':"+str(i))
		print("RT/AT:"+str(adr))

teo_ad(12)


