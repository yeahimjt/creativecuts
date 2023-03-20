import { Component } from '@angular/core';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  haircuts=[
    ["../../assets/scissor.jpg","Scissor Cut","$20","Encompasses all hair cuts that inolve Scissor work ONLY."],
    ["../../assets/clipper.jpg","Clippers Cut","$23","Encompasses all hair cuts that inolve Clippers work ONLY. Fades, and tapers are an additional $4."],
    ["../../assets/design1.jpg","Speciality Cut","$20","Encompasses all hair cuts that add the Creative Cuts speciality work such as design, braids, dreadlocks and more. Specialty work that is quoted to take over an hour will have an additional charge of $10."],
  ];
  beardgroom=[
    ["../../assets/beardtrim.jpg","Beard Trim","$12","Simple beard trim as requested."],
    ["../../assets/bearddesign.jpg","Specialty Beard Cut","$18","Beard cuts that require a further touch from our barbers."],
  ];
  hairwash=[
    ["../../assets/hairwash.jpg","Hair Wash only","$5","Simple hair wash with just your preference of hot or cold water."],
    ["../../assets/shampoo.jpg","Hair deep wash","$7","Hair shampoo and conditioning wash to get you ready for your day right out of our barbershop."],
  ];
  massages=[
    ["../../assets/massage.jpg","Head massage","$7","Head and neck massage to relieve stress."],
    ["../../assets/fullmassage.jpg","Body massage","$8","Body massage to relieve stress."],
  ];
  option="haircut";
  output = this.haircuts;
  setText(option:string) {
    if (option === 'beardgroom') {
      this.output = this.beardgroom;
      this.option="beardgroom"
    }
    else if (option === 'hairwash') {
      this.output = this.hairwash;
      this.option="hairwash"
    }

    else if (option === 'massage') {
      this.output = this.massages;
      this.option="massage"
    }
    else {
      this.output = this.haircuts;
      this.option="haircut";
    };
  }

}
