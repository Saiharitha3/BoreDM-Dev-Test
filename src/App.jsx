import { useState } from "react";
import "./styles.css";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { FaFilePdf, FaSpinner } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "./boredm-logo.png"; // Make sure this is in src/
import triangleIcon from "./triangleIcon.png"; // Make sure this is in src/

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 8,
    padding: 10,
  },
  row: {
    flexDirection: "row",
    width: "100%",
  },
  cell: {
    border: "0.5pt solid black",
    justifyContent: "center",
    padding: 0,
  },
  imageCentered: {
    width: "60%",
    height: "60%",
    margin: "auto",
  },
  headerTitle: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 6,
  },
  headerSubtitle: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 2,
  },
  topRight: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  subRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
    paddingHorizontal: 4,
    border: "0.5pt solid black",
  },
  subRowBottom: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
    paddingHorizontal: 4,
    border: "0.5pt solid black",
  },
  label: {
    marginRight: 4,
    fontWeight: "bold",
    textAlign: "left",
  },
  value: {
    textAlign: "left",
  },
});

const MyDoc = () => (
  <Document>
    <Page size="A4" style={styles.page}>

      {/* Row 1 - Header */}
      <View style={[styles.row, { height: "7%" }]}>
        <View style={[styles.cell, { width: "20%" }]}>
          <Image src={logo} style={styles.imageCentered} />
        </View>

        <View style={[styles.cell, { width: "60%", paddingVertical: 3 }]}>
          <View style={{ flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 10, fontWeight: "bold", textAlign: "center" }}>Riverside Condominiums</Text>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={{ fontSize: 8, fontWeight: "bold", textAlign: "center" }}>General Location - Project</Text>
            </View>
          </View>
        </View>

        <View style={[styles.cell, { width: "20%" }]}>
          <View style={styles.topRight}>
            <Text style={{ fontSize: 10, fontWeight: "bold", textAlign: "center", paddingVertical: 3 }}>B-17</Text>
            <View style={{ height: 20 }} />
            <Text style={{ fontSize: 6, textAlign: "center", marginBottom: 1.5 }}>Page 1 of 1</Text>
          </View>
        </View>
      </View>

      {/* Row 2 - Subtable */}
      <View style={styles.row}>
        {/* Column 1 */}
        <View style={[styles.cell, { width: "33.33%" }]}>
          <View style={styles.subRow}>
            <Text style={styles.label}>Drilling Firm:</Text>
            <Text style={styles.value}>BoreDM Drilling</Text>
          </View>
          <View style={styles.subRow}>
            <Text style={styles.label}>Driller:</Text>
            <Text style={styles.value}>PA</Text>
          </View>
          <View style={styles.subRow}>
            <Text style={styles.label}>Logged By:</Text>
            <Text style={styles.value}>LA</Text>
          </View>
          <View style={styles.subRow}>
            <Image src={triangleIcon} style={{ width: 10, height: 10, marginRight: 4 }} />
            <Text style={styles.label}>Water:</Text>
            <Text style={styles.value}>N/A</Text>
          </View>
        </View>

        {/* Column 2 */}
        <View style={[styles.cell, { width: "33.33%" }]}>
          <View style={styles.subRow}>
            <Text style={styles.label}>Project No.:</Text>
            <Text style={styles.value}>25-3332</Text>
          </View>
          <View style={styles.subRow}>
            <Text style={styles.label}>Date Drilled:</Text>
            <Text style={styles.value}>03/05/2025</Text>
          </View>
          <View style={styles.subRow}>
            <Text style={styles.label}>Boring Depth:</Text>
            <Text style={styles.value}>-</Text>
          </View>
          <View style={styles.subRow}>
            <Text style={styles.label}>Boring Elevation:</Text>
            <Text style={styles.value}>N/A</Text>
          </View>
        </View>

        {/* Column 3 */}
        <View style={[styles.cell, { width: "33.33%", padding: 4, alignItems: "flex-start", justifyContent: "flex-start" }]}>
          <View style={{ marginTop: 2 }}>
            <Text style={styles.label}>Remarks:</Text>
            <Text>-</Text>
          </View>
        </View>
      </View>

      {/* Row 3 - Footer */}
      <View style={styles.row}>
        <View style={[styles.subRowBottom, { width: "33.33%" }]}>
          <Text style={styles.label}>Hammer Type:</Text>
          <Text style={styles.value}>-</Text>
        </View>
        <View style={[styles.subRowBottom, { width: "66.67%" }]}>
          <Text style={styles.label}>Brand Address:</Text>
          <Text style={styles.value}>4909 N. 44th St, Phoenix, AZ 85018</Text>
        </View>
      </View>
    </Page>
  </Document>
);

function App() {
  const [isDownloading, setIsDownloading] = useState(false);

  // Handle download with success notification
  const handleDownloadClick = () => {
    setIsDownloading(true);
    
    // Show success toast after a brief delay
    setTimeout(() => {
      setIsDownloading(false);
      toast.success("PDF downloaded successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }, 1500);
  };

  return (
    <>
      {/* Toast Container */}
      <ToastContainer />

      {/* Main Content */}
      <div className="app-container">
        <div className="content-card">
          <h1 className="title">BoreDM-dev-test</h1>
          <p className="subtitle">
            Download your professional drilling documentation in PDF format.
            Includes project details, drilling information, and site data.
          </p>

          <PDFDownloadLink
            document={<MyDoc />}
            fileName="Result.pdf"
            className="download-button"
            onClick={handleDownloadClick}
            aria-label="Download PDF Report"
          >
            {({ loading }) =>
              loading || isDownloading ? (
                <>
                  <FaSpinner className="icon-spin" size={18} />
                  Generating PDF...
                </>
              ) : (
                <>
                  <FaFilePdf size={18} />
                  Download PDF
                </>
              )
            }
          </PDFDownloadLink>
        </div>
      </div>
    </>
  );
}

export default App;
