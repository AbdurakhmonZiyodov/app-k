import {makeAutoObservable} from 'mobx';
import {RootStore} from 'store/rootStore';

interface AddPayment {
  cardNumber?: any;
  cardName?: string;
  oldCardNumber?: string;
  endDate?: string;
  cvc?: string;
}

export default class AccountStore {
  private readonly root: RootStore;
  addPayment: AddPayment = {
    cardName: '',
    cardNumber: [],
    oldCardNumber: '',
    endDate: '',
    cvc: '',
  };
  constructor(root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
  }

  changeValue = (value: string, key: keyof AddPayment) => {
    console.log(this.addPayment.oldCardNumber);
    this.addPayment[key] = value;
    if (this.addPayment.oldCardNumber) {
      this.mask(this.addPayment.oldCardNumber);
    }
  };

  // var input = document.getElementById('credit-card-mask'),
  //   oldValue,
  //   regex = new RegExp(/^\d{0,16}$/g),

  mask = (value: string) => {
    for (var i = 0; i < value.length; i++) {
      if (i !== 0 && i % 4 === 0) {
        this.addPayment.cardNumber.push(' '); // add the separator
      }
      this.addPayment.cardNumber.push(value[i]);
    }
    console.log(this.addPayment.cardNumber, 'output');
    return this.addPayment.cardNumber.join('');
  };

  // unmask = function(value) {/^\d{0,16}$/g
  //   var output = value.replace(new RegExp(/[^\d]/, 'g'), ''); // Remove every non-digit character
  //   return output;
  // },

  //   keydownHandler = function(e) {
  //     oldValue = e.target.value;
  //   },

  //   inputHandler = function(e) {
  //         var el = e.target,
  //              newValue = el.value
  //         ;
  //         newValue = unmask(newValue);

  //         if(newValue.match(regex)) {
  //           newValue = mask(newValue);
  //           el.value = newValue;
  //         } else {
  //           el.value = oldValue;
  //         }
  //   }
}
