"use client";
import React, { useState, useCallback } from "react";
import {
  Download,
  Eye,
  Code,
  FileText,
  Settings,
  Palette,
  Layout,
} from "lucide-react";

const IAWriterTemplateConfigurator = () => {
  const [config, setConfig] = useState({
    // Template Info
    name: "My Custom Template",
    identifier: "com.example.mycustomtemplate",
    description: "A custom iA Writer template",
    author: "Template Author",
    authorURL: "https://example.com",

    // Template Features
    supportsMath: true,
    supportsSmartTables: true,
    titleUsesHeaderAndFooterHeight: true,
    headerHeight: 50,
    footerHeight: 50,

    // Style Configuration
    fontFamily: "system-ui, -apple-system, sans-serif",
    fontSize: "16px",
    lineHeight: "1.6",
    textColor: "#333333",
    backgroundColor: "#ffffff",
    linkColor: "#0066cc",

    // Night Mode
    nightModeTextColor: "#e0e0e0",
    nightModeBackgroundColor: "#1a1a1a",
    nightModeLinkColor: "#66b3ff",

    // Layout
    maxWidth: "800px",
    marginHorizontal: "2rem",
    marginVertical: "1rem",

    // Typography
    headingColor: "#2c3e50",
    nightModeHeadingColor: "#f0f0f0",
    h1Size: "2.5rem",
    h2Size: "2rem",
    h3Size: "1.5rem",

    // Custom CSS
    customCSS: "",
  });

  const [activeTab, setActiveTab] = useState("basic");

  const updateConfig = useCallback((key: any, value: any) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  }, []);

  const generateInfoPlist = () => {
    return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>CFBundleName</key>
    <string>${config.name}</string>
    <key>CFBundleIdentifier</key>
    <string>${config.identifier}</string>
    <key>IATemplateDocumentFile</key>
    <string>document</string>
    <key>IATemplateTitleFile</key>
    <string>title</string>
    <key>IATemplateHeaderFile</key>
    <string>header</string>
    <key>IATemplateFooterFile</key>
    <string>footer</string>
    <key>IATemplateHeaderHeight</key>
    <integer>${config.headerHeight}</integer>
    <key>IATemplateFooterHeight</key>
    <integer>${config.footerHeight}</integer>
    <key>IATemplateDescription</key>
    <string>${config.description}</string>
    <key>IATemplateAuthor</key>
    <string>${config.author}</string>
    <key>IATemplateAuthorURL</key>
    <string>${config.authorURL}</string>
    <key>IATemplateSupportsMath</key>
    <${config.supportsMath ? "true" : "false"}/>
    <key>IATemplateSuportsSmartTables</key>
    <${config.supportsSmartTables ? "true" : "false"}/>
    <key>IATemplateTitleUsesHeaderAndFooterHeight</key>
    <${config.titleUsesHeaderAndFooterHeight ? "true" : "false"}/>
</dict>
</plist>`;
  };

  const generateCSS = () => {
    return `/* Generated iA Writer Template Styles */

/* Base HTML styling */
html {
    font-family: ${config.fontFamily};
    font-size: ${config.fontSize};
    line-height: ${config.lineHeight};
    color: ${config.textColor};
    background-color: ${config.backgroundColor};
    padding: ${config.marginVertical} ${config.marginHorizontal};
}

/* Document body */
body {
    max-width: ${config.maxWidth};
    margin: 0 auto;
    padding: 0;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
    color: ${config.headingColor};
    margin: 1.5em 0 0.5em 0;
    font-weight: 600;
}

h1 { font-size: ${config.h1Size}; }
h2 { font-size: ${config.h2Size}; }
h3 { font-size: ${config.h3Size}; }

p {
    margin: 1em 0;
}

/* Links */
a {
    color: ${config.linkColor};
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

/* Lists */
ul, ol {
    margin: 1em 0;
    padding-left: 2em;
}

li {
    margin: 0.5em 0;
}

/* Code */
code {
    background-color: rgba(0, 0, 0, 0.05);
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-family: 'SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', monospace;
    font-size: 0.9em;
}

pre {
    background-color: rgba(0, 0, 0, 0.05);
    padding: 1em;
    border-radius: 5px;
    overflow-x: auto;
    margin: 1em 0;
}

pre code {
    background-color: transparent;
    padding: 0;
}

/* Blockquotes */
blockquote {
    border-left: 4px solid ${config.linkColor};
    padding-left: 1em;
    margin: 1em 0;
    font-style: italic;
    color: rgba(${parseInt(config.textColor.slice(1), 16) >> 16}, ${(parseInt(config.textColor.slice(1), 16) >> 8) & 255}, ${parseInt(config.textColor.slice(1), 16) & 255}, 0.8);
}

/* Tables */
table {
    border-collapse: collapse;
    width: 100%;
    margin: 1em 0;
}

th, td {
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 0.5em;
    text-align: left;
}

th {
    background-color: rgba(0, 0, 0, 0.05);
    font-weight: 600;
}

/* Images */
img {
    max-width: 100%;
    height: auto;
    margin: 1em 0;
}

/* Night Mode */
html.night-mode {
    color: ${config.nightModeTextColor};
    background-color: ${config.nightModeBackgroundColor};
}

html.night-mode h1,
html.night-mode h2,
html.night-mode h3,
html.night-mode h4,
html.night-mode h5,
html.night-mode h6 {
    color: ${config.nightModeHeadingColor};
}

html.night-mode a {
    color: ${config.nightModeLinkColor};
}

html.night-mode code {
    background-color: rgba(255, 255, 255, 0.1);
}

html.night-mode pre {
    background-color: rgba(255, 255, 255, 0.1);
}

html.night-mode blockquote {
    border-left-color: ${config.nightModeLinkColor};
    color: rgba(224, 224, 224, 0.8);
}

html.night-mode th {
    background-color: rgba(255, 255, 255, 0.1);
}

html.night-mode th,
html.night-mode td {
    border-color: rgba(255, 255, 255, 0.2);
}

/* iOS Font Size Support */
html.content-size-xs { font-size: 12px; }
html.content-size-s { font-size: 14px; }
html.content-size-m { font-size: 15px; }
html.content-size-l { font-size: 16px; }
html.content-size-xl { font-size: 18px; }
html.content-size-xxl { font-size: 20px; }
html.content-size-xxxl { font-size: 24px; }

/* Accessibility sizes */
html.content-size-accessibility-m { font-size: 28px; }
html.content-size-accessibility-l { font-size: 32px; }
html.content-size-accessibility-xl { font-size: 36px; }
html.content-size-accessibility-xxl { font-size: 40px; }
html.content-size-accessibility-xxxl { font-size: 44px; }

/* Title page specific */
body.title {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
}

body.title h1 {
    font-size: 3rem;
    margin-bottom: 0.5em;
}

body.title h2 {
    font-size: 1.5rem;
    font-weight: 400;
    opacity: 0.8;
}

/* Header and Footer */
body.header,
body.footer {
    font-size: 0.9em;
    opacity: 0.7;
}

body.header p,
body.footer p {
    margin: 0;
}

body.footer {
    text-align: center;
}

/* Custom CSS */
${config.customCSS}`;
  };

  const generateTitleHTML = () => {
    return `<!doctype html>
<html>
<head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" media="all" href="style.css" />
</head>
<body class="title">
<h1 data-title>&nbsp;</h1>
<h2 data-author>&nbsp;</h2>
</body>
</html>`;
  };

  const generateHeaderHTML = () => {
    return `<!doctype html>
<html>
<head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" media="all" href="style.css" />
</head>
<body class="header">
<p><span data-title>&nbsp;</span>&nbsp;-&nbsp;<span data-date>&nbsp;</span></p>
</body>
</html>`;
  };

  const generateFooterHTML = () => {
    return `<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" media="all" href="style.css">
</head>
<body class="footer">
<p><span data-page-number>&nbsp;</span>&nbsp;/&nbsp;<span data-page-count>&nbsp;</span></p>
</body>
</html>`;
  };

  const generateDocumentHTML = () => {
    return `<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" media="all" href="style.css">
</head>
<body data-document>&nbsp;</body>
</html>`;
  };

  const downloadTemplate = () => {
    const files = {
      "Info.plist": generateInfoPlist(),
      "style.css": generateCSS(),
      "title.html": generateTitleHTML(),
      "header.html": generateHeaderHTML(),
      "footer.html": generateFooterHTML(),
      "document.html": generateDocumentHTML(),
    };

    // Create a simple way to download files (in a real app, you'd zip them)
    Object.entries(files).forEach(([filename, content]) => {
      const blob = new Blob([content], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  };

  const [previewFile, setPreviewFile] = useState("style.css");

  const getPreviewContent = () => {
    switch (previewFile) {
      case "Info.plist":
        return generateInfoPlist();
      case "style.css":
        return generateCSS();
      case "title.html":
        return generateTitleHTML();
      case "header.html":
        return generateHeaderHTML();
      case "footer.html":
        return generateFooterHTML();
      case "document.html":
        return generateDocumentHTML();
      default:
        return "";
    }
  };

  const tabs = [
    { id: "basic", label: "Basic Info", icon: FileText },
    { id: "layout", label: "Layout", icon: Layout },
    { id: "style", label: "Typography", icon: Palette },
    { id: "advanced", label: "Advanced", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
            <h1 className="text-3xl font-bold mb-2">
              iA Writer Template Configurator
            </h1>
            <p className="opacity-90">
              Create and customize professional iA Writer templates
            </p>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Configuration Panel */}
            <div className="lg:w-1/2 p-6 border-r border-gray-200">
              <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                        activeTab === tab.id
                          ? "bg-white text-blue-600 shadow-sm"
                          : "text-gray-600 hover:text-gray-800"
                      }`}
                    >
                      <IconComponent size={16} />
                      <span className="text-sm font-medium">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="space-y-6">
                {activeTab === "basic" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Template Name
                      </label>
                      <input
                        type="text"
                        value={config.name}
                        onChange={(e) => updateConfig("name", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bundle Identifier
                      </label>
                      <input
                        type="text"
                        value={config.identifier}
                        onChange={(e) =>
                          updateConfig("identifier", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                        placeholder="com.example.templatename"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <textarea
                        value={config.description}
                        onChange={(e) =>
                          updateConfig("description", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                        rows={3}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Author
                      </label>
                      <input
                        type="text"
                        value={config.author}
                        onChange={(e) => updateConfig("author", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Author URL
                      </label>
                      <input
                        type="url"
                        value={config.authorURL}
                        onChange={(e) =>
                          updateConfig("authorURL", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                      />
                    </div>
                  </div>
                )}

                {activeTab === "layout" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Header Height (px)
                        </label>
                        <input
                          type="number"
                          value={config.headerHeight}
                          onChange={(e) =>
                            updateConfig(
                              "headerHeight",
                              parseInt(e.target.value),
                            )
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                          min="0"
                          max="400"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Footer Height (px)
                        </label>
                        <input
                          type="number"
                          value={config.footerHeight}
                          onChange={(e) =>
                            updateConfig(
                              "footerHeight",
                              parseInt(e.target.value),
                            )
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                          min="0"
                          max="400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Max Width
                      </label>
                      <input
                        type="text"
                        value={config.maxWidth}
                        onChange={(e) =>
                          updateConfig("maxWidth", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                        placeholder="800px"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Horizontal Margin
                        </label>
                        <input
                          type="text"
                          value={config.marginHorizontal}
                          onChange={(e) =>
                            updateConfig("marginHorizontal", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                          placeholder="2rem"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Vertical Margin
                        </label>
                        <input
                          type="text"
                          value={config.marginVertical}
                          onChange={(e) =>
                            updateConfig("marginVertical", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                          placeholder="1rem"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "style" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Font Family
                      </label>
                      <input
                        type="text"
                        value={config.fontFamily}
                        onChange={(e) =>
                          updateConfig("fontFamily", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Font Size
                        </label>
                        <input
                          type="text"
                          value={config.fontSize}
                          onChange={(e) =>
                            updateConfig("fontSize", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Line Height
                        </label>
                        <input
                          type="text"
                          value={config.lineHeight}
                          onChange={(e) =>
                            updateConfig("lineHeight", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          H1 Size
                        </label>
                        <input
                          type="text"
                          value={config.h1Size}
                          onChange={(e) =>
                            updateConfig("h1Size", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          H2 Size
                        </label>
                        <input
                          type="text"
                          value={config.h2Size}
                          onChange={(e) =>
                            updateConfig("h2Size", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          H3 Size
                        </label>
                        <input
                          type="text"
                          value={config.h3Size}
                          onChange={(e) =>
                            updateConfig("h3Size", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900">
                        Light Mode Colors
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Text Color
                          </label>
                          <input
                            type="color"
                            value={config.textColor}
                            onChange={(e) =>
                              updateConfig("textColor", e.target.value)
                            }
                            className="w-full h-10 border border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Background Color
                          </label>
                          <input
                            type="color"
                            value={config.backgroundColor}
                            onChange={(e) =>
                              updateConfig("backgroundColor", e.target.value)
                            }
                            className="w-full h-10 border border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Heading Color
                          </label>
                          <input
                            type="color"
                            value={config.headingColor}
                            onChange={(e) =>
                              updateConfig("headingColor", e.target.value)
                            }
                            className="w-full h-10 border border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Link Color
                          </label>
                          <input
                            type="color"
                            value={config.linkColor}
                            onChange={(e) =>
                              updateConfig("linkColor", e.target.value)
                            }
                            className="w-full h-10 border border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900">
                        Night Mode Colors
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Text Color
                          </label>
                          <input
                            type="color"
                            value={config.nightModeTextColor}
                            onChange={(e) =>
                              updateConfig("nightModeTextColor", e.target.value)
                            }
                            className="w-full h-10 border border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Background Color
                          </label>
                          <input
                            type="color"
                            value={config.nightModeBackgroundColor}
                            onChange={(e) =>
                              updateConfig(
                                "nightModeBackgroundColor",
                                e.target.value,
                              )
                            }
                            className="w-full h-10 border border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Heading Color
                          </label>
                          <input
                            type="color"
                            value={config.nightModeHeadingColor}
                            onChange={(e) =>
                              updateConfig(
                                "nightModeHeadingColor",
                                e.target.value,
                              )
                            }
                            className="w-full h-10 border border-gray-300 rounded-md"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Link Color
                          </label>
                          <input
                            type="color"
                            value={config.nightModeLinkColor}
                            onChange={(e) =>
                              updateConfig("nightModeLinkColor", e.target.value)
                            }
                            className="w-full h-10 border border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "advanced" && (
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900">
                        Template Features
                      </h4>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={config.supportsMath}
                            onChange={(e) =>
                              updateConfig("supportsMath", e.target.checked)
                            }
                            className="mr-2"
                          />
                          <span className="text-sm text-gray-700">
                            Support Math (TeX expressions)
                          </span>
                        </label>

                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={config.supportsSmartTables}
                            onChange={(e) =>
                              updateConfig(
                                "supportsSmartTables",
                                e.target.checked,
                              )
                            }
                            className="mr-2"
                          />
                          <span className="text-sm text-gray-700">
                            Support Smart Tables
                          </span>
                        </label>

                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={config.titleUsesHeaderAndFooterHeight}
                            onChange={(e) =>
                              updateConfig(
                                "titleUsesHeaderAndFooterHeight",
                                e.target.checked,
                              )
                            }
                            className="mr-2"
                          />
                          <span className="text-sm text-gray-700">
                            Title page uses header/footer height
                          </span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Custom CSS
                      </label>
                      <textarea
                        value={config.customCSS}
                        onChange={(e) =>
                          updateConfig("customCSS", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 font-mono text-sm"
                        rows={8}
                        placeholder="/* Add your custom CSS here */"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Preview Panel */}
            <div className="lg:w-1/2 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  File Preview
                </h3>
                <div className="flex items-center space-x-2">
                  <select
                    value={previewFile}
                    onChange={(e) => setPreviewFile(e.target.value)}
                    className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  >
                    <option value="Info.plist">Info.plist</option>
                    <option value="style.css">style.css</option>
                    <option value="title.html">title.html</option>
                    <option value="header.html">header.html</option>
                    <option value="footer.html">footer.html</option>
                    <option value="document.html">document.html</option>
                  </select>
                  <button
                    onClick={downloadTemplate}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <Download size={16} />
                    <span>Download Files</span>
                  </button>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
                  <Code size={16} className="text-gray-400" />
                  <span className="text-gray-300 text-sm font-mono">
                    {previewFile}
                  </span>
                </div>
                <pre className="p-4 text-sm text-gray-100 overflow-x-auto max-h-96">
                  <code>{getPreviewContent()}</code>
                </pre>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">
                  Installation Instructions
                </h4>
                <div className="text-sm text-blue-800 space-y-2">
                  <p>
                    <strong>1.</strong> Download all files using the button
                    above
                  </p>
                  <p>
                    <strong>2.</strong> Create a folder named{" "}
                    <code className="bg-blue-100 px-1 rounded">
                      {config.name.replace(/\s+/g, "")}.iatemplate
                    </code>
                  </p>
                  <p>
                    <strong>3.</strong> Inside that folder, create a{" "}
                    <code className="bg-blue-100 px-1 rounded">Contents</code>{" "}
                    folder
                  </p>
                  <p>
                    <strong>4.</strong> Inside{" "}
                    <code className="bg-blue-100 px-1 rounded">Contents</code>,
                    create a{" "}
                    <code className="bg-blue-100 px-1 rounded">Resources</code>{" "}
                    folder
                  </p>
                  <p>
                    <strong>5.</strong> Place{" "}
                    <code className="bg-blue-100 px-1 rounded">Info.plist</code>{" "}
                    in the{" "}
                    <code className="bg-blue-100 px-1 rounded">Contents</code>{" "}
                    folder
                  </p>
                  <p>
                    <strong>6.</strong> Place all HTML and CSS files in the{" "}
                    <code className="bg-blue-100 px-1 rounded">Resources</code>{" "}
                    folder
                  </p>
                  <p>
                    <strong>7.</strong> Double-click the template bundle to
                    install in iA Writer
                  </p>
                </div>
              </div>

              <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-medium text-yellow-900 mb-2">
                  Template Structure
                </h4>
                <div className="text-sm text-yellow-800 font-mono">
                  <div>{config.name.replace(/\s+/g, "")}.iatemplate/</div>
                  <div className="ml-4">Contents/</div>
                  <div className="ml-8">Info.plist</div>
                  <div className="ml-8">Resources/</div>
                  <div className="ml-12">document.html</div>
                  <div className="ml-12">title.html</div>
                  <div className="ml-12">header.html</div>
                  <div className="ml-12">footer.html</div>
                  <div className="ml-12">style.css</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Template Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <Eye className="text-green-600" size={20} />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">
                  Night Mode Support
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Automatic dark theme with customizable colors
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Layout className="text-blue-600" size={20} />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Responsive Design</h3>
                <p className="text-sm text-gray-600 mt-1">
                  iOS font size scaling and responsive layout
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <FileText className="text-purple-600" size={20} />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Complete Template</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Title page, headers, footers, and document styling
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-orange-100 p-2 rounded-lg">
                <Palette className="text-orange-600" size={20} />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">
                  Typography Control
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Custom fonts, sizes, and heading styles
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-red-100 p-2 rounded-lg">
                <Code className="text-red-600" size={20} />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Custom CSS</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Add your own styles for advanced customization
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-teal-100 p-2 rounded-lg">
                <Settings className="text-teal-600" size={20} />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Feature Toggles</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Enable/disable math support and smart tables
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IAWriterTemplateConfigurator;
