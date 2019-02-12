# Accounting Monthly report

Acme company is a payment gateway, we make merchants happy with our payment solutions.

We process lots of transactions from various payment methods. It is required for Acme to provide a monthly finance report for the national bank.

Help us to create the report using a csv file that contains the list of transaction of December 2018 from Acme company, `acme_december_2018.csv`.



## Business requirements

A CSV file shall include the following columns:

|Column  |Name                           |Type    |Note                                                                      |
|--------|-------------------------------|--------|--------------------------------------------------------------------------|
|1       |fi_code                        |string  |use the value `42` for entire column                                      |
|2       |date                           |string  |date format YYYY-MM-DD                                                    | 
|3       |service_system_type            |string  |                                                                          |
|4       |transaction_type               |string  |                                                                          |
|5       |merchant_business_type         |string  |                                                                          |
|6       |merchant_category_code         |string  |                                                                          |
|7       |amount                         |float   |use two decimal points but do not use comma to separate groups of thousands|
|8       |number                         |integer |do not use comma to separate groups of thousands                          |
|9       |terminal_average_amount_range  |string  |                                                                          |



Column 1
- fi_code
  - Acme identification id

Column 2
- date
  - Convert the value in "date" column in csv file into the end date of the month.
    - i.e. 2018-12-03 -> 2018-12-31

Column 3
- service_system_type
  - There are only two types: "CPF" as Card Payment Facilitator and "OTH" as Others.
  - Service system type is linked with the value in "payment_methd" in csv file. The table below provides the mapping between the category of service system type and each payment type.

|payment type   |  service system type |
|---------------|----------------------|
|payment01      |CPF                   |
|payment02      |OTH                   |
|payment03      |OTH                   |
|payment04      |OTH                   |

Column 4
- transaction_type
  - If the value in "payment_method" is `payment01`, use the table below to get transaction type code based on the combination of the values in "card_type", "card_country_issuer_code" and "card_brand"
  - `A029` in "card_country_issuer_code" column indicates its country code is "Local", the other values indicate "Inter".
  - If the value in either "card_type", "card_brand" or "card_country_issuer_code" is missing, use transaction type code `099999`.
  
|card type      |country  | card band | transaction type code|
|---------------|---------|-----------|----------------------|
|type01         | Local   | brand01   | 010001               |
|type01         | Local   | brand02   | 010002               |
|type01         | Local   | brand03   | 010003               |
|type01         | Local   | other     | 010004               |
|type01         | Inter   | brand01   | 010011               |
|type01         | Inter   | brand02   | 010012               |
|type01         | Inter   | brand03   | 010013               |
|type01         | Inter   | other     | 010014               |
|type02         | Local   | brand01   | 010021               |
|type02         | Local   | brand02   | 010022               |
|type02         | Local   | brand03   | 010023               |
|type02         | Local   | other     | 010024               |
|type02         | Inter   | brand01   | 010031               |
|type02         | Inter   | brand02   | 010032               |
|type02         | Inter   | brand03   | 010033               |
|type02         | Inter   | other     | 010034               |

- 
  - If payment method is not `payment01`, use the value in "backend_name" column to find the transaction type code.


|backend name| transaction type code|
|------------|----------------------|
|b03         |000004                |
|b04         |000004                |
|b05         |000004                |
|b06         |000004                |
|b12         |000001                |
|b14         |000002                |
|b15         |000003                |




  
Column 5
- merchant_business_type
  - For `OTH` service system type, leave merchant business type empty. 
  - For `CPF` service system type, use this table.
    - if the value in “card_brand” is missing, leave it empty.
  
|card brand  | merchant business type code|
|------------|----------------------------|
|brand01     |30101                       |
|brand02     |30102                       |
|brand03     |30103                       |
|brand04     |30104                       |



Column 6
- merchant_category_code
  - Merchant category code is linked with the value in "merchant_category_id". Refer the mapping data in `mcc_data.csv` file.
  - The merchant category code shouldn't be empty for CPF transactions.
    - if the value in merchant_category_id or corresponding code is missing, use `9999` code.

  


Column 7
- amount
  - The total amount of the value in "amount" column in csv file. The total amount shall be aggregated by the combination of date (Column 2), service_system_type(Column 3), transaction_type(Column 4), merchant_business_type(Column 5), and merchant_category_code(Column 6).


Column 8
- number
  - The total number of transaction, the number of records in csv file.  The total number shall be aggregated by the combination of date (Column 2), service_system_type(Column 3), transaction_type(Column 4), merchant_business_type(Column 5), and merchant_category_code(Column 6).


Column 9
- terminal_average_amount_range
  - First, get the average of the value in "amount" column in csv file. The average shall be calculated among the transactions grouped based on the combination of date (Column 2), service_system_type(Column 3), transaction_type(Column 4), merchant_business_type(Column 5), and merchant_category_code(Column 6).This can be figured by the formula: Column 7 / Column 8
  - Then, gain a corresponding terminal average amount range code referring the following mapping table with the average amount.

|average amount range           | terminal average amount range code |
|-------------------------------|------------------------------------|
| <= 500                        | 94560000001                        |
| 500 > and <= 1000             | 94560000002                        |
| 1000 > and <= 2000            | 94560000003                        |
| 2000 > and <= 5000            | 94560000004                        |
| 5000 > and <= 10000           | 94560000005                        |
| 10000 > and <= 30000          | 94560000006                        |
| 30000 >                       | 94560000007                        |


### CSV output requirements:

- file name is ACME_YYYYMMMDD
  - The date is the value from the date (Column 2)
- Each column is separated by a vertical bar (`|`).
- Each row use CRLF for a new line.

## Technical requirements

-  Use Apache Spark or Apache Beam frameworks.
-  Include a README file that explains how we can deploy your code.


