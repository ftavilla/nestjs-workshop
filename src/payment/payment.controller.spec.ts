import { Test, TestingModule } from '@nestjs/testing';
import { PaymentController } from './payment.controller';
import {PaymentService} from "./payment.service";
import {AppModule} from "../app.module";

describe('PaymentController', () => {
  let controller: PaymentController;
  let service: PaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentController],
      providers: [PaymentService]
    }).compile();

    controller = module.get<PaymentController>(PaymentController);
    service = module.get<PaymentService>(PaymentService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a valid Google Payment', () => {
    jest.spyOn(service, 'payWithGoogle').mockReturnValue('Payment ok')
    expect(controller.payWithGoogle()).toBe('Payment ok');
  });

  it('should return a valid Apple Payment', () => {
    jest.spyOn(service, 'payWithApple').mockReturnValue('Payment ok')
    expect(controller.payWithApple()).toBe('Payment ok');
  });

  it('should return a valid Stripe Payment', () => {
    jest.spyOn(service, 'payWithStripe').mockReturnValue('Payment ok')
    expect(controller.payWithStripe()).toBe('Payment ok');
  });

  it('should return a valid Paypal Payment', () => {
    jest.spyOn(service, 'payWithPaypal').mockReturnValue('Payment ok')
    expect(controller.payWithPaypal()).toBe('Payment ok');
  });
});
