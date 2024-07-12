import { Card } from '@/components/ui/card';

interface BalanceCardProps {
  balance: any;
}

const BalanceCard = ({ balance }: BalanceCardProps): JSX.Element => {
  return (
    <Card>
      <h2>Gesamtvermögen: ${balance?.total}</h2>
      <p>{balance?.currency}</p>
    </Card>
  );
};

export default BalanceCard;
