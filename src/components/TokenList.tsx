import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TokenRow from "./TokenRow";

 const TokenList = ({ coin, balance }: { coin: any, balance:any }) => {
  return (
    <>

      <Card>
        <CardHeader className="px-7">
          <CardTitle>Orders</CardTitle>
          <CardDescription>Recent orders from your store.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Coin</TableHead>
                <TableHead className="hidden sm:table-cell">Anzahl</TableHead>
                <TableHead className="hidden sm:table-cell">Unrealisierte pnl</TableHead>
                <TableHead className="hidden md:table-cell">Wert</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
            {balance.result.list[0].coin.map((coin: any) => (
            <TokenRow key={coin.coin} coin={coin} />
          ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
export default TokenList;



