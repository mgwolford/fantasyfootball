const SHEET_NAME = "Predictions";

function doPost(event) {
  try {
    const data = JSON.parse(event.postData.contents);
    const sheet = getPredictionSheet();
    const lockTime = new Date("2026-09-09T21:00:00.000Z");

    if (new Date() > lockTime) {
      throw new Error("Predictions are locked for the season.");
    }

    if (!data.manager || !data.season) {
      throw new Error("Manager and season are required.");
    }

    const existingRows = sheet.getDataRange().getValues();
    const alreadySubmitted = existingRows.slice(1).some((row) =>
      String(row[1]) === String(data.season) && row[2] === data.manager
    );

    if (alreadySubmitted) {
      throw new Error(`${data.manager} has already submitted predictions.`);
    }

    sheet.appendRow([
      new Date(), data.season, data.manager,
      JSON.stringify(data.winTotals),
      JSON.stringify(data.divisionWinners),
      data.afcWildCards.join(", "), data.nfcWildCards.join(", "),
      data.afcChampion, data.nfcChampion, data.superBowlWinner,
      JSON.stringify(data.awards),
    ]);

    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ success: false, message: error.message });
  }
}

function getPredictionSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Submitted At", "Season", "Manager", "Win Totals",
      "Division Winners", "AFC Wild Cards", "NFC Wild Cards",
      "AFC Champion", "NFC Champion", "Super Bowl Winner", "Awards",
    ]);
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
