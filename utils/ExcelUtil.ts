import path from "path";
import xlsx from "xlsx";

export class ExcelUtil {
 
    static filepath: string = path.join('./test-data/Excel apllication from trail.xlsx');
    static getExcelData(sheetName: string, row: number, col: number): any {

        const workbook = xlsx.readFile(ExcelUtil.filepath);
        const sheet = workbook.Sheets[sheetName];
        const cellAddress = xlsx.utils.encode_cell({ r: row - 1, c: col - 1 });
        const cell = sheet[cellAddress];
        //const data=xlsx.utils.sheet_to_json(sheet); // to convert sheet data to json format
        return cell?.v;

    }
}