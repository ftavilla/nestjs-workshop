import {Controller, Get} from '@nestjs/common';

@Controller('payment')
export class PaymentController {

    @Get('/google')
    payWithGoogle(): string {
        return 'Payment ok'
    }

    @Get('/apple')
    payWithApple(): string {
        return 'Payment ok'
    }

    @Get('/stripe')
    payWithStripe(): string {
        return 'Payment ok'
    }

    @Get('/paypal')
    payWithPaypal(): string {
        return 'Payment ok'
    }
}
