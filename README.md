# User Daily reports

Acme Exchange(Acme for short) is a cryptocurrency exchange company, we provide a platform for user to trade cryptocurrencies. 


Acme analyses users’ trading info and wants two reports delivered every day:

1. Historical users’ trades.

2. User summary report aggregating the above report, which contains date, user id, and amount in usd.

Help Acme creating these reports. Business requirements are followed.

## Business requirements

### Historical user trades

A CSV file for each day of trade.

| Column | Name                 | Type      | Note                      |
|--------|----------------------|-----------|---------------------------|
| 1      | trade_id             | integer   |                           |
| 2      | side                 | string    | buy or sell               |
| 3      | user_id              | integer   |                           |
| 4      | amount               | float     | use six decimal points    |
| 5      | amount_currency      | string    |                           |
| 6      | trade_inserted_at    | timestamp |                           |
| 7      | rate_inserted_at    | timestamp |                           |
| 8      | usd_rate             | float     | from price_conversion.csv |
| 9      | amount_usd           | float     | use six decimal points    |
| 10     | cumsum_amount_usd    | float     | use six decimal points    |
| 11     | high_amount_usd_flag | boolean   |                           |

Column 1

* trade_id
  * id column in data.csv

Column 2

* side
  * side column in data.csv

Column 3

* user_id
  * user_id column in data.csv

Column 4

* amount
  * amount column in data.csv

Column 5

* amount_currency
  * amount_currency column in data.csv

Column 6

* trade_inserted_at
  * inserted_at column in data.csv

Column 7

* rate_inserted_at
  * inserted_at column in currency_conversion.csv

Column 8

* usd_rate
  * usd_rate column in currency_conversion.csv

Column 9

* amount_usd
  * amount * usd_rate (Column 8 x Column 9)
  * Conditions to join data.csv and currency_conversion.csv files
    * amount_currency column in data.csv and symbol column in currency_conversion.csv
    * inserted_at column in data.csv and inserted_at column in currency_conversion.csv
    * timestamps in currency_conversion.csv are recorded every hour. You need to round timestamps in inserted_at column in data.csv first.
  

Column 10

* cumsum_amount_usd
  * Cumulative sum of amount_usd based on the order of the records.
  * The records should be sorted by trade id, side, user id.

Column 11

* high_amount_usd_flag
  * Set to `True` if `cumsum_amount_usd` is over `20000`.

  

### User summary report

A CSV file that summarize the first report.

| Column | Name       | Type    | Note                   |
|--------|------------|---------|------------------------|
| 1      | date       | date    | format YYYY-MM-DD      |
| 2      | user_id    | integer |                        |
| 3      | amount_usd | float   | use six decimal points |


Column 1

* date
  * date of user trade from inserted_at column in data.csv
  
Column 2

* user_id
  * id of user who made trades
  
Column 3

* amount_usd
  * total amount of each user per day in USD.
  
  
## CSV output requirements:

### Historical user trades

- file name shall be `HIST_TRADES_YYYYMMMDD.csv`
- YYYYMMDD is the trade date. One CSV file is correspond to one trade date.
- the file should be sorted by trade id, side, user id.

### User summary report

- file name shall be `USER_DAILY_YYYYMMMDD.csv`
- YYYYMMDD is the trade date. One CSV file is correspond to one trade date.

## Technical requirements

-  Use Apache Spark(Python) or [Apache Beam](https://beam.apache.org/) frameworks.
-  Include a README file that explains how we can deploy your code.
-  Include results in CSV files from processing given data.


