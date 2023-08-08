import { RequestContractService } from "../domain/contractRequest/service/RequestContractService";
import { ChargeService } from "../domain/payment/service/ChargeService";
import { CreateLicenseService } from "../domain/License/service/createLicenseService";

class ContractLicense {
  constructor(
    private requestContractService: RequestContractService, // serviceにするほどか？
    private ChargeService: ChargeService,
    private createLicenseService: CreateLicenseService // serviceにするほどか？
  ) {}

  // TODO: 情報量多いならDTOでwrapするといいかも
  execute(
    licensePlanId: number,
    contractorId: number,
    payerId: number,
    paymentCount: number
  ): void {
    // 1-2 : ContractRequestを生成する(from licesePlan & reuqest params)
    this.requestContractService.execute(contractorId, licensePlanId);
    // Payerを取得

    // 2-1 : 決済者 = 契約者の場合
    if (this.isSamePayerAndContractor(contractorId, payerId)) {
      // 2-1-1 : 契約申請を決済する(決済の実行, 決済履歴の生成, 分割支払い予定の生成) as service
      // 2-1-2 : ライセンスを生成する as service?
      // 2-1-3 : 通知を送る
    }

    // 2-2 : 決済者 != 契約者 & 自動決済onの場合
    if (
      this.isSamePayerAndContractor(contractorId, payerId) &&
      payer.isAutoPayment()
    ) {
      // 2-2-1 : PaymentRequestを生成する(through Payer)
      // 2-2-2 : 契約申請を決済する(決済の実行, 決済履歴の生成, 分割支払い予定の生成)
      // 2-2-3 : ライセンスを生成する
      // 2-2-4 : 通知を送る
    }

    // 2-3 : 決済者 != 契約者 & 自動決済offの場合
    if (
      this.isSamePayerAndContractor(contractorId, payerId) &&
      !payer.isAutoPayment()
    ) {
      // 2-3-1 : PaymentRequestを生成する(through Payer)
      // 2-3-2 : 決済者に通知を送る
    }
  }

  private isSamePayerAndContractor(
    contractorId: number,
    payerId: number
  ): boolean {
    return payerId === contractorId;
  }
}
