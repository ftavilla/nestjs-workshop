import { Test, TestingModule } from '@nestjs/testing';
import { PaymentService } from './payment.service';

describe('PaymentService', () => {
  let service: PaymentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentService],
    }).compile();

    service = module.get<PaymentService>(PaymentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a valid Google Payment', () => {
    expect(service.payWithGoogle()).toBe('Payment ok');
  });

  it('should return a valid Apple Payment', () => {
    expect(service.payWithApple()).toBe('Payment ok');
  });

  it('should return a valid Stripe Payment', () => {
    expect(service.payWithStripe()).toBe('Payment ok');
  });

  it('should return a valid Paypal Payment', () => {
    expect(service.payWithPaypal()).toBe('Payment ok');
  });
});
