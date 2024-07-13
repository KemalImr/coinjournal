export interface Position {
    symbol: string;
    size: string;
    avgPrice: string;
    markPrice: string;
    leverage: string;
    unrealisedPnl: string;
  }
  
  export interface ApiResponse {
    positions: Position[];
  }
  