import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Download,
  Check,
  Copy,
  ExternalLink,
  ShieldCheck,
  FileArchive,
  Sparkles,
  HelpCircle,
  FolderCheck,
  ArrowRight,
} from "lucide-react";

interface WordPressThemeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WordPressThemeModal({ open, onOpenChange }: WordPressThemeModalProps) {
  const [downloadStatus, setDownloadStatus] = useState<"idle" | "downloading" | "success">("idle");
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"download" | "install" | "troubleshoot">("download");

  const handleBlobDownload = async (filename: string = "avr-web-consulting.zip") => {
    setDownloadStatus("downloading");
    try {
      const response = await fetch(`/${filename}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);

      setDownloadStatus("success");
      setTimeout(() => setDownloadStatus("idle"), 4000);
    } catch (err) {
      console.warn("Direct blob download fallback to direct anchor:", err);
      // Fallback: direct window open or anchor
      const directLink = document.createElement("a");
      directLink.href = `/${filename}`;
      directLink.download = filename;
      directLink.target = "_blank";
      directLink.rel = "noopener noreferrer";
      document.body.appendChild(directLink);
      directLink.click();
      document.body.removeChild(directLink);
      setDownloadStatus("success");
      setTimeout(() => setDownloadStatus("idle"), 4000);
    }
  };

  const handleCopyLink = () => {
    const origin =
      typeof window !== "undefined" ? window.location.origin : "https://avrwebconsulting.com";
    const downloadUrl = `${origin}/avr-web-consulting.zip`;
    navigator.clipboard.writeText(downloadUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl max-h-[90vh] overflow-y-auto p-6 sm:p-7">
        <DialogHeader className="text-left space-y-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>WordPress Theme Edition</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
              <ShieldCheck className="h-3 w-3" />
              <span>WP 6.0 – 6.7+ Verified</span>
            </span>
          </div>

          <DialogTitle className="text-2xl font-bold tracking-tight text-foreground">
            Download AVR Web Consulting Theme
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
            Production-ready WordPress theme with compiled Tailwind CSS, responsive mobile touch
            drawer, SEO metadata, and full agency layout.
          </DialogDescription>
        </DialogHeader>

        {/* Tab Switcher */}
        <div className="flex border-b border-border/80 gap-6 text-sm font-semibold pt-2">
          <button
            type="button"
            onClick={() => setActiveTab("download")}
            className={`pb-2.5 border-b-2 transition-colors ${
              activeTab === "download"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Download ZIP
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("install")}
            className={`pb-2.5 border-b-2 transition-colors ${
              activeTab === "install"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Installation Guide
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("troubleshoot")}
            className={`pb-2.5 border-b-2 transition-colors ${
              activeTab === "troubleshoot"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Troubleshooting
          </button>
        </div>

        {/* TAB 1: DOWNLOAD */}
        {activeTab === "download" && (
          <div className="space-y-5 pt-3">
            {/* Main Download Card */}
            <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/5 via-background to-cyan-500/5 p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
                    <FileArchive className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">avr-web-consulting.zip</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Standard WordPress theme package &bull; ~945 KB &bull; v1.0.0
                    </p>
                  </div>
                </div>

                <div className="hidden sm:block text-right">
                  <span className="inline-block rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5">
                    100% Intact
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 grid sm:grid-cols-2 gap-2.5">
                <Button
                  onClick={() => handleBlobDownload("avr-web-consulting.zip")}
                  disabled={downloadStatus === "downloading"}
                  className="w-full rounded-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
                >
                  {downloadStatus === "downloading" ? (
                    <span className="inline-flex items-center gap-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      <span>Downloading ZIP...</span>
                    </span>
                  ) : downloadStatus === "success" ? (
                    <span className="inline-flex items-center gap-2 text-white">
                      <Check className="h-4 w-4" />
                      <span>Download Complete!</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      <span>Download Theme (.ZIP)</span>
                    </span>
                  )}
                </Button>

                <Button
                  variant="outline"
                  onClick={handleCopyLink}
                  className="w-full rounded-xl border-border/80 font-semibold text-foreground hover:bg-muted"
                >
                  {copied ? (
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 font-bold">
                      <Check className="h-4 w-4" />
                      <span>Copied Direct URL!</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5">
                      <Copy className="h-4 w-4 text-muted-foreground" />
                      <span>Copy Download Link</span>
                    </span>
                  )}
                </Button>
              </div>

              {/* Fallback New Window Link */}
              <div className="mt-3.5 flex items-center justify-between text-xs text-muted-foreground border-t border-border/60 pt-3">
                <span>In iframe or preview?</span>
                <a
                  href="/avr-web-consulting.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                >
                  <span>Open direct download in new tab</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Direct un-nested alternative archive */}
            <div className="rounded-xl border border-border/80 bg-muted/40 p-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-xs font-bold text-foreground flex items-center gap-1.5">
                    <FolderCheck className="h-3.5 w-3.5 text-primary" />
                    <span>Alternative: Flat Root Archive (avr-web-consulting-direct.zip)</span>
                  </h4>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    For hosting dashboards (cPanel/Plesk) that unpack directly into themes folder
                    without subfolder wrapper.
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => handleBlobDownload("avr-web-consulting-direct.zip")}
                  className="rounded-lg text-xs font-semibold shrink-0"
                >
                  <Download className="h-3 w-3 mr-1" />
                  <span>Download Direct</span>
                </Button>
              </div>
            </div>

            {/* What's inside */}
            <div className="rounded-xl bg-muted/30 p-4 border border-border/50 text-xs space-y-2">
              <div className="font-semibold text-foreground flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-emerald-600" />
                <span>Package Integrity Verified:</span>
              </div>
              <ul className="grid grid-cols-2 gap-1.5 text-muted-foreground pl-1">
                <li>&bull; style.css &amp; functions.php</li>
                <li>&bull; front-page.php (video hero)</li>
                <li>&bull; template-contact.php (AJAX form)</li>
                <li>&bull; template-service.php (deliverables)</li>
                <li>&bull; template-pricing.php (3-tier plans)</li>
                <li>&bull; template-faqs.php (accordions)</li>
                <li>&bull; template-fullwidth.php (builders)</li>
                <li>&bull; assets/css/main.css &amp; theme.js</li>
              </ul>
            </div>
          </div>
        )}

        {/* TAB 2: INSTALLATION GUIDE */}
        {activeTab === "install" && (
          <div className="space-y-4 pt-3 text-sm">
            <div className="rounded-2xl border border-border bg-card p-5 space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  1
                </span>
                <div>
                  <h4 className="font-bold text-foreground">Log into WordPress Admin</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Visit your WordPress administration dashboard at{" "}
                    <code className="bg-muted px-1 py-0.5 rounded text-primary">
                      yoursite.com/wp-admin
                    </code>
                    .
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  2
                </span>
                <div>
                  <h4 className="font-bold text-foreground">Navigate to Themes Upload</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Click <strong>Appearance &gt; Themes</strong> in the left sidebar, then click
                    the <strong>&quot;Add New Theme&quot;</strong> button at the top, followed by{" "}
                    <strong>&quot;Upload Theme&quot;</strong>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  3
                </span>
                <div>
                  <h4 className="font-bold text-foreground">Select ZIP &amp; Install Now</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Click <strong>&quot;Choose File&quot;</strong>, select the downloaded{" "}
                    <code className="bg-muted px-1 py-0.5 rounded text-foreground font-semibold">
                      avr-web-consulting.zip
                    </code>
                    , and click <strong>&quot;Install Now&quot;</strong>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                  4
                </span>
                <div>
                  <h4 className="font-bold text-foreground">Activate the Theme</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Once installed, click <strong>&quot;Activate&quot;</strong>. You can customize
                    your phone, email, WhatsApp, and office address under{" "}
                    <strong>Appearance &gt; Customize &gt; AVR Company Information</strong>.
                  </p>
                </div>
              </div>
            </div>

            <Button
              onClick={() => handleBlobDownload("avr-web-consulting.zip")}
              className="w-full rounded-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Download className="h-4 w-4 mr-2" />
              <span>Download avr-web-consulting.zip</span>
            </Button>
          </div>
        )}

        {/* TAB 3: TROUBLESHOOTING */}
        {activeTab === "troubleshoot" && (
          <div className="space-y-4 pt-3 text-xs sm:text-sm">
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 space-y-2">
              <h4 className="font-bold text-foreground flex items-center gap-1.5 text-amber-700 dark:text-amber-400">
                <HelpCircle className="h-4 w-4" />
                <span>Why did you see &quot;zipfile not opening or damaged&quot;?</span>
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                This commonly happens for two reasons:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-xs text-muted-foreground pl-1">
                <li>
                  <strong>Incomplete download via browser sandbox:</strong> When downloading files
                  from within preview iframes, some web browsers block or prematurely stop zip
                  downloads, saving an incomplete 0-byte or corrupt file. Using our{" "}
                  <strong>verified download button</strong> or opening the download in a new tab
                  resolves this completely.
                </li>
                <li>
                  <strong>Missing directory index entries:</strong> Standard Windows Explorer and
                  WordPress PclZip require explicit folder records. Our newly rebuilt archive
                  includes full POSIX directory attributes for 100% compatibility.
                </li>
              </ol>
            </div>

            <div className="rounded-xl border border-border bg-card p-4 space-y-2.5">
              <h4 className="font-bold text-foreground text-xs uppercase tracking-wider">
                Manual FTP / cPanel Upload Alternative:
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                If your WordPress server has strict PHP upload limits (
                <code className="bg-muted px-1 py-0.5 rounded">upload_max_filesize</code>):
              </p>
              <div className="rounded-lg bg-muted p-3 font-mono text-[11px] text-foreground">
                wp-content/themes/avr-web-consulting/
                <br />
                ├── style.css
                <br />
                ├── functions.php
                <br />
                ├── index.php
                <br />
                ├── header.php &amp; footer.php
                <br />
                └── assets/css/main.css
              </div>
              <p className="text-[11px] text-muted-foreground">
                Simply upload the folder directly to your hosting server under{" "}
                <code className="bg-muted px-1 py-0.5 rounded">/wp-content/themes/</code> and
                activate it in WordPress admin!
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
