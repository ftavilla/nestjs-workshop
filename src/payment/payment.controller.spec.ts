import { Test, TestingModule } from '@nestjs/testing';
import { PaymentController } from './payment.controller';

describe('PaymentController', () => {
  let controller: PaymentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentController],
    }).compile();

    controller = module.get<PaymentController>(PaymentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a valid Google Payment', () => {
    expect(controller.payWithGoogle()).toBe('Payment ok');
  });

  it('should return a valid Apple Payment', () => {
    expect(controller.payWithApple()).toBe('Payment ok');
  });

  it('should return a valid Stripe Payment', () => {
    expect(controller.payWithStripe()).toBe('Payment ok');
  });

  it('should return a valid Paypal Payment', () => {
    expect(controller.payWithPaypal()).toBe('Payment ok');
  });
});
