import { Document, Image, PDFViewer, Page, Text, View, } from "@react-pdf/renderer"
import { createTw } from "react-pdf-tailwind";
import samplePdf from "../assets/pdfs/ISO-9000-2015.pdf"


// The 'theme' object is your Tailwind theme config
const tw = createTw({
    theme: {
        fontFamily: {
            sans: ["Comic Sans"],
        },
        extend: {
            colors: {
                custom: "#bada55",
            },
        },
    },
});

export function DocumentUpload() {
    return (
        <PDFViewer width="100%" style={tw("h-screen")}>
            <Document>
                <Page size="A4" style={tw("flex flex-row flex-wrap gap-4")}>
                    <View
                        style={tw("flex-1 min-w-[200pt] p-4 flex-col bg-blue-100")}
                        wrap={false}>
                        <Text style={tw("text-2xl font-bold text-custom")}>
                            Section 1
                        </Text>
                        <Image source={samplePdf}>
                        </Image>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
}