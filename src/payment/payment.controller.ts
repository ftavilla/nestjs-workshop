import {Controller, Get} from '@nestjs/common';
import {PaymentService} from "./payment.service";

@Controller('payment')
export class PaymentController {

    constructor(private readonly paymentService: PaymentService) {}

    @Get('/google')
    payWithGoogle(): string {
        return this.paymentService.payWithGoogle()
    }

    @Get('/apple')
    payWithApple(): string {
        return this.paymentService.payWithApple()
    }

    @Get('/stripe')
    payWithStripe(): string {
        return this.paymentService.payWithStripe()
    }

    @Get('/paypal')
    payWithPaypal(): string {
        return this.paymentService.payWithPaypal()
    }
}
