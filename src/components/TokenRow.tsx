import React from 'react'
import { TableCell, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const TokenRow = ({ coin }: { coin: any }) => {
  return (
    <TableRow className="bg-accent">
                <TableCell>
                  <div className="font-medium">{coin.coin}</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    liam@example.com
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {coin.equity}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs" variant="secondary">
                    Fulfilled
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {coin.unrealisedPnl}
                </TableCell>
                <TableCell className="text-right">{coin.usdValue}</TableCell>
              </TableRow>
  )
}

export default TokenRow