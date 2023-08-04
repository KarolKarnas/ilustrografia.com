type Props = {
	shortName: string;
};

const VariationDescription = ({ shortName }: Props) => {
	if (shortName === 'art-print') {
		return (
			<>
				Wydruki Fine Art Print (Giclée) to najwyższej jakości druk pigmentowy
				oparty o bazę żywiczną, który wykorzystuje materiały klasy archiwalnej.
				Co to oznacza? Że Twój wydruk to technologia jakiej używają muzea i domy
				aukcyjne; nie żółknie, nie blaknie i zachowuje swoją jakość gwarantowaną
				na co najmniej 100 lat. Ten najbardziej profesjonalny druk artystyczny
				wspomagany jest także przez użycie bezkwasowych papierów, dzięki którym
				widać każdy detal i kolor. Metoda Fine Art Print pozwoli Ci uzyskać
				wydruk o absolutnie najlepszych parametrach jakościowych dostępnych na
				rynku. Do tego dochodzi jego długowieczność i genialna prezencja.
				Ponadto, wydruki Giclée, po podpisaniu przez autora oryginału, zyskują
				wartość kolekcjonerską oraz traktowane są na równi z dziełami sztuki
				nowoczesnej.Czas zainwestować w perfekcję, nie sądzisz?
			</>
		);
	} else if (shortName === 'painting-on-canvas') {
		return (
			<>
				Te wyjątkowe druki powstają na tkaninie{' '}
				<strong>Canvas, o charakterystyce bawełny</strong>. Materiał ten ma
				niesamowitą fakturę, która nada Twojemu obrazowi nieprzeciętny charakter
				i klimat. To wszystko zwieńczy naciągnięcie druku na drewniane, sosnowe
				ramy, dzięki czemu uzyskasz fenomenalny efekt prawdziwej pracy
				malarskiej. Zwróć także uwagę, że do produkcji obrazu użyto tylko
				ekologicznych i bezzapachowych atramentów, które zapewnią bezpieczeństwo
				dla Twojego zdrowia i środowiska. Ułatwione Ci zostanie także
				zawieszenie obrazu na ścianie – płótno naciągane jest na naturalną,
				drewnianą konstrukcję z zadrukowanymi krawędziami bocznymi, więc nie
				musisz wkładać obrazu w ramę.
				<em className='block pt-2'>Wybieraj i zawieszaj!</em>
			</>
		);
	} else if (shortName === 'poster') {
		return (
			<>
				<strong>
					Wydruk plakatowy powstaje na atramentowym ploterze, gdzie tusze wodne{' '}
				</strong>
				zastępuje się pigmentowymi atramentami eco-solwentowymi. Takie atramenty
				bazując na organicznych rozpuszczalnikach, są przyjazne środowisku,
				dzięki czemu świadomie wspierasz dobro naszej planety. Możesz mieć więc
				pewność co do trafnej inwestycji w plakat. Ponadto, atramenty
				eco-solwentowe słyną z bardzo dużej odporności druku, zwłaszcza na
				promienie słoneczne. Sprawi to, że zyskasz dowolność w tym, gdzie plakat
				zawiesisz – zarówno miejsca nasłonecznione, jak i ciemne, nie będą
				wpływać na jakość ilustracji. Wydruk powstaje na lekko sztywnym i
				trwałym papierze 200g, który pozwoli Ci cieszyć się jego dużą
				wytrzymałością. Wiesz już jaki plakat wybierzesz?
			</>
		);
	} else if (shortName === 'premium-print') {
		return (
			<>
				Wydruk Premium używa technologii atramentowej, która we współpracy z
				półmatowym, grubym papierem 265g, sprawi że Twoja ilustracja będzie
				delikatnie i intrygująco odbijała światło. Ponadto papier ten wykazuje
				niezwykłą wytrzymałość, będąc dużo odporniejszym na deformacje i wilgoć
				w pomieszczeniu.
				<strong> Dodatkowo, do produkcji papieru wykorzystano</strong>
				specjalistyczną emulsję, która tworzy powłokę gwarantującą mocne,
				nasycone kolory oraz wysoką jakość i ostrość wydruku. Dzięki temu Twoja
				ilustracja zyska nie tylko niezwykły, wyróżniający się wygląd, ale także
				trwałość i solidność pozwalającą cieszyć się nim przez długie lata.
				<strong className=' text-xl'> Pozwól sobie na wydruk Premium!</strong>
			</>
		);
	} else {
		return <div>{shortName}</div>;
	}
};
export default VariationDescription;
