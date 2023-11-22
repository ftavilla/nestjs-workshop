import {Get, Injectable} from '@nestjs/common';

@Injectable()
export class PaymentService {

    payWithGoogle(): string {
        return 'Payment ok'
    }

    payWithApple(): string {
        return 'Payment ok'
    }

    payWithStripe(): string {
        return 'Payment ok'
    }

    payWithPaypal(): string {
        return 'Payment ok'
    }
}
