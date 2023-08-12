//       TERNARY OPERATOR  uchun Mantiqiy amallar (if, else) misollarini yechamiz

// 1-MISOL : A butun son berilgan. Jumlani rostlikka tekshiring: A son musbat

function misol1(a1) {
    console.log(`siz kiritgan son: `+ a1);
    let res = a1>0 ? "musbat" : "manfiy";
    console.log(res);
   }
   misol1(8);
   // 2-MISOL : A butun son berilgan. Jumlani rostlikka tekshiring: A toq son
   
   function misol2(a2) {
   console.log(`siz kiritgan son: `+ a2);
   let res = a2 % 2 != 0 ? "toq" : "juft";
    console.log(res);
   }
    misol2(7);
   // 3-MISOL : A butun son berilgan. Junlani rostlikka tekshiring: A juft son
   
   function misol3(a3){
    console.log(`siz kiritgan son: `+ a3);
   let res = a3 % 2 == 0 ? "juft" : "toq";
    console.log(res);
   }
    misol3(16);
   // 4-MISOL : Ikkita butun son berilgan. Jumlani rostlikka tekshiring. M-s a > 0 && b > 0
   
   function misol4(a4,b4){
    let res = a4 > 0 && b4 > 0 ? "true" : "false";
    console.log(res);
   }
   misol4(9,6)
   // 5-MISOL : 3 ta son berilgan a,b,c. a bdan katta b c dan katta rostlikka tekshiring
   
   function misol5(a5,b5,c5){
    let res = a5>b5 && b5>c5 ? "true" : "false";
    console.log(res);
   }
   misol5(31,21,11)
   // 6-MISOL : a, b, c, son berilgan. B son a va c sonlarni orasida yotadi.
   
   function misol6(a6,b6,c6){
    let res = a6>b6 && b6>c6 ? "true" : "false";
    console.log(res);
   }
   misol6(42,10,2)
   // 7-MISOL : a, b sonlar berilgan sonlarni toq songa tekshiring.
   
   function misol7(a7,b7){
    let res =a7 %2 != 0 && b7 %2 !=  0 ? "true" : "false";
    console.log(res);
   }
   misol7(3,5)
   // 8-MISOL : a,b,c,d sonlar berilgan barchasi musbat
   
   function misol8(a8,b8,c8,d8){
    let res = a8 > 0 && b8 > 0 && c8 > 0 && d8 > 0 ? "true" : "false";
    console.log(res);
   }
   misol8(3,6,8,6)
   // 9-MISOL : a,b,c sonlar berilgan kamida ikkitasi musbat berilgan
   
   function misol9(a9,b9,c9){
    let res = a9>=0 && b9>=0 && c9>=0 ? "sonlar ichida 3 ala son ham musbat" : a9>=0 && b9>=0 && c9<0 ? "sonlar ichida 1-chi va 2-chi son musbat" : a9>=0 && b9<0 && c9>=0 ? "sonlar ichida 1-chi va 3-chi son musbat" : a9<0 && b9>=0 && c9>=0 ? "sonlar ichida 2-chi va 3-chi son musbat" : "sonlar ichida kamida 2 tasi musbat emas";
    console.log(res);
    
   }
   misol9(3,-6,3)
   // 10-MISOL : hafta kunlari berilgan raqamga qarab hafta kunlarini nomini chiqaring
   function misol10(a10){
   let kun= ['dushanba','seshanba','chorshanba','payshanba','juma','shanba','yakshanba'];
   let res = a10==1 ? kun[0] : a10==2 ? kun[1] : a10==3 ? kun[2] : a10==4 ? kun[3] : a10==5 ? kun[4] : a10==6 ? kun[5] : a10==7 ? kun[6] :"haftada 7 kun bor";
    console.log(res);
   }
   misol10(5)
   // 11-MISOL : Telefon nomer kodi orqali qaysi kompaniya ekanligini tekshiring
   
   function misol11(a11){
    let res = a11==93 || a11==94 ? 'ucell' : a11==99 || a11==95 ? 'uzmobile' : a11==90 || a11==91 ? 'beeline' : a11==97 ? 'ums' : a11==98 ? 'perfectum' : a11==33? 'humans' :'Bunday kodli kompaniya yuq';
    console.log(res);
   }
   misol11(93);
   // 12-MISOL : Butun son berilgan agar son musbat bo'lsa unda sonni bittaga oshiring aks xolda 1taga kamaytiring
   
   function misol12(a12){
    let res =a12 > 0 ? a12+1 : a12-1;
    console.log(res);
   }
   misol12(7)
   // 13-MISOL : Butun son berilgan agar son musbat bo'lsa sonni 3 ga oshiring manfiy bo'lsa unda 2ga kamaytiring
   
   function misol13(a13){
    let res =a13 > 0 ? a13+3 : a13-2;
    console.log(res);
   }
   misol13(7);
   // 14-MISOL : Ikkita butun son berilgan kattasin aniqlovchi dastur tuzing
   
   function misol14(a14,b14){
    let res =a14>b14 ? 'birinchi son katta': 'ikkinchi son katta';
    console.log(res);
   }
   misol14(22,21)
   // 15-MISOL : 3 ta butun son berilgan eng kattasini aniqlovchi dastur tuzing
   
   function misol15(num1,num2,num3){
   let maxNumber;
   let res = num1 >= num2 && num1 >= num3 ? maxNumber = num1
    : num2 >= num1 && num2 >= num3 ? maxNumber = num2 : maxNumber = num3;
   
   console.log("The maximum number is:", maxNumber);
   }
   misol15(1000,25,11115)
   
   //16-MISOL : 3 ta son berilgan eng kichikin aniqlovchi dastur tuzing
 
   function misol16(a16,b16,c16){
   let minNumber;
   let res = a16 <= b16 && a16 <= c16 ? minNumber = a16
    : b16 <= a16 && b16 <= c16 ? minNumber = b16 : minNumber = c16;
   
    console.log("The minimum number is:", minNumber);
   }
   misol16(10,25,5)
  
   // 18-MISOL : Bahoga qarab stependiyani aniqlovchi dastur tuzing
   
   function misol18(ball){
    let res = ball >=60 && ball<70 ? 'siz 3 lik stipendiya olasiz' : ball >=70 && ball<90 ? 'siz 4 lik stipendiya olasiz' : ball >=90 && ball<=100 ? 'siz 5 lik stipendiya olasiz' :'siz stipendiya olmaysiz';
    console.log(res);
   }
   misol18(90)
   // 19-MISOL : Butun son berilgan shu songa qarab toq musbat, toq manfiy, juft musbat, juft manfiy deb chiqaruvchi dastur tuzing
   
   function misol19(a19){
    let res = a19 %2 !=0 && a19>0 ? 'toq musbat' : a19 %2 !=0 && a19<0 ? 'toq manfiy' : a19 %2 ==0 && a19>0 ? 'juft musbat' : 'juft manfiy';
    console.log(res);
   }
   misol19(-8);
   // 20-MISOL : Yilga qarab yoshin aniqlovchi dastur tuzing
   
   function misol20(TugilganYili,HozirgiYil){
    let res =HozirgiYil>TugilganYili ? HozirgiYil-TugilganYili : 'u hali 1 yoshga tolmagan yoki hali tugilmagan';
    console.log(res);
   }
   misol20(1990,2023)
   // 21-MISOL : 3 ta butun son berilgan jumlani rostlikkar tekshiring. A <= B <= C
   
   function misol21(a21,b21,c21){
    let res = a21 <= b21 && a21 <= c21 && b21<= c21 ? true : false;
    console.log(res);
   }
   misol21(12,47,89)
   
   // 22-MISOL : ikki butun son berilgan ikki sondan faqat 1tasi toq son hisoblanadi
   
   function misol22(a22,b22){
    let res = a22 %2 != 0 && b22 %2 == 0 ? true : a22 %2 == 0 && b22 %2 != 0 ? true : false;
    console.log(res);
   }
   misol22(60,25)
   // 23-MISOL : a,b,c sonlar berilgan har biri musbat son
   
   function misol23(a23,b23,c23){
    let res = a23>=0 && b23>=0 && c23>=0 ? 'kiritiligan sonlarning har biri musbat son ' : 'kiritiligan sonlarning har biri musbat son emas!!! ';
    console.log(res);
   }
   misol23(32,54,-56)
   // 24-MISOL : a,b,c sonlardan biri musbat son
   
   function misol24(a24,b24,c24){
    let res = a24>=0 && b24>=0 && c24>=0 ? "sonlar ichida biri musbat son" : a24>=0 && b24>=0 && c24<0 ? "sonlar ichida biri musbat son" : a24<0 && b24>=0 && c24>=0? "sonlar ichida biri musbat son" : a24>=0 && b24<0 && c24>=0 ? "sonlar ichida biri musbat son" : a24>=0 && b24<0 && c24<0? "sonlar ichida biri musbat son": a24<0 && b24>=0 && c24<0? "sonlar ichida biri musbat son": a24<0 && b24<0 && c24>=0? "sonlar ichida biri musbat son": 'sonlar ichida hech biri musbat son emas!!!';
    console.log(res);
   }
   misol24(-6,45,-5)
   
   // 25-MISOL : 3 xonali son berilgan har bir raqamlari har xil
   function misol25(a25){                      //xxy xyx yxx xxx yyy
   let x= Math.floor(a25/100);
   let y= Math.floor(a25/10)%10;
   let z=a25%100;
   
   let res = x=y ? 'kiritilgan uch xonali sonning har bir raqami har xil emas!!!': x=z ? 'kiritilgan uch xonali sonning har bir raqami har xil emas!!!':  y=z ? 'kiritilgan uch xonali sonning har bir raqami har xil emas!!!': x==y && y==z && x==z ? 'kiritilgan uch xonali sonning har bir raqami har xil emas!!!': 'kiritilgan uch xonali sonning har bir raqami har xil';
   console.log(res);
   }
   misol25(757)
   // 26-MISOL : 3 xonali son berilgan raqamlari ketma ket o'sib boruvchi joylashgan
   function misol26(a26){                       
    let x= Math.floor(a26/100);
    let y= Math.floor(a26/10)%10;
    let z=a26%100;
    
    let res = x>y  ? "kiritilgan uch xonali sonning raqamlari ketma ket o'sib boruvchi bo'lib joylashmagan!!!": x>z  ? "kiritilgan uch xonali sonning raqamlari ketma ket o'sib boruvchi bo'lib joylashmagan!!!": y>z  ? "kiritilgan uch xonali sonning raqamlari ketma ket o'sib boruvchi bo'lib joylashmagan!!!":x>y && y>z && x>z  ? "kiritilgan uch xonali sonning raqamlari ketma ket o'sib boruvchi bo'lib joylashmagan!!!":"kiritilgan uch xonali sonning raqamlari ketma ket o'sib boruvchi bo'lib joylashgan";
    console.log(res);
   }
    misol26(568)
   // 27-MISOL : Kompyuter nomiga qarab kompyuter summasini chiqaruvchi dastur yarating
   
   function misol27(nomi){
    let res = nomi='lenovo' ? 'lenovo ning narxi 950$' : nomi='hp' ? 'hp ning narxi 900$' : nomi='asus' ? 'asus ning narxi 970$' : nomi='macbook' ? 'macbook ning narxi 1500$' : nomi='acer' ? 'acer ning narxi 930$': 'Dokonimizda bunday kompyuter qolmagan';
    console.log(res);
   }
   misol27('lenovo');
   // 28-MISOL : Sonlar berilgan shu sonlar ichidan faqat murakkab sonlarni chiqaruvchi dastur tuzing (for)!
   
   