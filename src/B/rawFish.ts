class Fish {
  constructor(public name: string) {}

  cook(): void {
    console.log('cook');
  }
}

class SushiFish extends Fish {
  constructor(name: string, cooked: boolean = false) {
    super(name);
  }

  cook(): void {
    console.log("You don't cook a sushi fish");
  }
}

class CookedFish extends Fish {
  constructor(name: string, cooked: boolean = true) {
    super(name);
  }

  cook(): void {
    console.log('IS already cooked');
  }
}

const tuna = new Fish('Tuna');
const dinner = new CookedFish('Halibut');

tuna.cook();
dinner.cook();
