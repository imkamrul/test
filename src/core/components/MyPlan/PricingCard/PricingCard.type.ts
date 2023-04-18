export interface RuleType {
  rule: {
    value: null;
    operand: null;
    operator: string;
  };
  label: string;
}

export interface SinglePlanType {
  id: number;
  name: string;
  slug: string;
  type: number;
  rules: RuleType[];
  status: number;
  interval: string;
  price: number;
  discount_price: number;
  topup_charge: number;
  reset_charge: number;
  investment_limit: number;
  setup_fee: number;
  total_price: number;
  description: string;
  payment_gateway: string;
  payment_gateway_id: string;
}
