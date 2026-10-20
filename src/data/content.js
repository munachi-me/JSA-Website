export const APP_URL = 'https://jsa-pearl.vercel.app';
export const REPO_URL = 'https://github.com/munachi-me/JSA';
export const CURRENT_VERSION = 'v0.5.2';

export const features = [
  { id: 'data-import', icon: 'Database', title: 'Bring your data in', category: 'Data workflow', description: 'Start with CSV or JSON data and move into analysis without wrestling with a complicated setup.', details: ['Import supported CSV and JSON files', 'Inspect columns and dataset structure', 'Work from the dataset you selected'] },
  { id: 'data-preparation', icon: 'SlidersHorizontal', title: 'Prepare data with intent', category: 'Data workflow', description: 'Clean and reshape data before analysis using focused, visible preparation operations.', details: ['Filter records and handle missing values', 'Rename, remove, and split columns where supported', 'Create conditional or calculated columns where supported'] },
  { id: 'analysis', icon: 'BarChart3', title: 'Explore the numbers', category: 'Analysis', description: 'Use analytical functions and aggregations to move from raw rows toward meaningful summaries.', details: ['Descriptive statistics', 'Grouping and aggregation', 'Recommended analyses and generated insights'] },
  { id: 'visualizations', icon: 'BarChart3', title: 'Make patterns visible', category: 'Analysis', description: 'Turn the results of an analysis into visual summaries that are easier to interpret.', details: ['Configure supported chart types', 'Use meaningful titles and labels', 'Inspect chart data in a table when available'] },
  { id: 'kpis', icon: 'Gauge', title: 'Track meaningful metrics', category: 'Reporting', description: 'Create named KPI metrics that make important numbers easy to spot.', details: ['Give metrics clear, human-readable names', 'Surface key values in dashboards', 'Keep labels meaningful in supported exports'] },
  { id: 'dashboards', icon: 'LayoutDashboard', title: 'Bring the story together', category: 'Reporting', description: 'Arrange key metrics, charts, filters, and insights into a dashboard built around your question.', details: ['Compose a dashboard from supported elements', 'Use interactive filters where available', 'Resize and arrange dashboard elements'] },
  { id: 'exports', icon: 'FileDown', title: 'Take your work with you', category: 'Reporting', description: 'Share analysis outcomes outside the workspace using the export options available in the app.', details: ['Export supported dashboard formats', 'Use print-friendly output where available', 'Review export warnings for embedded data'] },
  { id: 'local-workflow', icon: 'ShieldCheck', title: 'Keep the workflow focused', category: 'Workflow', description: 'A practical workspace for working through a dataset, with storage and persistence behavior described in the app.', details: ['Inspect the current dataset and columns', 'Move between preparation and analysis', 'Check the current release notes for behavior changes'] },
];

export const docs = [
  { slug: 'introduction', group: 'Start here', title: 'Introduction', summary: 'What JSA is and how the workflow fits together.', sections: [
    ['What is JSA?', 'JSA (JavaScript Analytics) is a data analytics platform for exploring datasets, preparing data, performing analysis, and presenting results through visualizations and dashboards.'],
    ['The core workflow', 'A useful starting point is to bring in a dataset, inspect its columns, prepare the data, perform an analysis, and then present the findings in a chart or dashboard. Not every workflow requires every step.'],
    ['Product status', 'JSA is actively evolving. Interface details and available operations can change between releases. Use the live application and the matching release notes as the final reference for behavior.']
  ]},
  { slug: 'quick-start', group: 'Start here', title: 'Quick start', summary: 'Get from a dataset to your first result.', sections: [
    ['1. Open JSA', `Launch the hosted application at ${APP_URL}.`],
    ['2. Bring in a dataset', 'Choose a supported CSV or JSON file. Begin with a small, well-formed sample dataset so you can understand the workflow before using a larger file.'],
    ['3. Inspect and prepare', 'Review the available columns. If needed, clean or transform the data before starting analysis. Keep the original source file available in case you want to compare results.'],
    ['4. Analyze and present', 'Choose an available analysis, inspect the output, and create a visualization or dashboard when it helps communicate the result.'],
    ['5. Export carefully', 'Use the export option that fits your needs. Review any warnings, particularly when an export embeds data in a standalone HTML file.']
  ]},
  { slug: 'importing-data', group: 'User guide', title: 'Importing data', summary: 'Prepare CSV and JSON files for analysis.', sections: [
    ['Supported formats', 'JSA has supported CSV and JSON import in its development history. Exact JSON shape and file-size limits should be confirmed in the current release before relying on a specific format.'],
    ['Good dataset hygiene', 'Use clear column names, consistent values, and one record per row where applicable. Avoid mixing dates, numbers, and explanatory text in the same field unless that is intentional.'],
    ['After import', 'Inspect the dataset name, row count, and columns shown by the application. Check for unexpected blanks, duplicate records, and values that may have been interpreted incorrectly.']
  ]},
  { slug: 'data-preparation', group: 'User guide', title: 'Data preparation', summary: 'Clean and shape a dataset before analysis.', sections: [
    ['Start with the question', 'Decide what you need to measure before changing the data. That helps you avoid transformations that remove useful information.'],
    ['Common preparation tasks', 'Depending on the active version, JSA includes operations for filtering records, handling missing values, and transforming columns. Some releases also include column renaming, deletion, splitting, and conditional or calculated columns.'],
    ['Validate each step', 'After a transformation, review the resulting rows and columns. Pay special attention to filters, formulas, and conditions that may match no records or too many records.'],
    ['Keep a reproducible workflow', 'Record the operations you apply and test them on a small sample first. Consult the in-app controls and release notes for the exact options supported by your version.']
  ]},
  { slug: 'analysis', group: 'User guide', title: 'Analysis', summary: 'Choose analytical functions and interpret results.', sections: [
    ['Choose an analytical question', 'Start with a clear question: What is typical? How do groups compare? Which values are most common? Is a measure changing over time?'],
    ['Descriptive statistics', 'JSA includes descriptive-statistics functionality. Use summary measures to understand the distribution and quality of numeric data before drawing conclusions.'],
    ['Grouping and aggregation', 'When comparing categories, group records by a relevant field and select a supported aggregation. Check the group labels and aggregation output before interpreting the result.'],
    ['Recommended analyses and insights', 'The application may surface recommended analyses or generated insights. Treat these as prompts for investigation, not as proof of causation. Validate each observation against the underlying data.']
  ]},
  { slug: 'charts', group: 'User guide', title: 'Charts and visualizations', summary: 'Choose a chart that makes the result easier to understand.', sections: [
    ['Choose a chart for the question', 'Use comparisons for category differences, line charts for ordered time trends when supported, and distributions or summaries when the question is about spread. Avoid adding visual complexity without a clear purpose.'],
    ['Label clearly', 'Give charts descriptive names, label axes where available, and use units consistently. A reader should understand what is being measured without needing to inspect the source configuration.'],
    ['Check the underlying values', 'Where the application offers a table view for chart data, use it to verify labels and values. Review how missing values and categories are handled.']
  ]},
  { slug: 'dashboards', group: 'User guide', title: 'Building dashboards', summary: 'Bring KPIs, charts, filters, and insights into one view.', sections: [
    ['Design around a decision', 'A dashboard is most useful when it answers a specific question. Put the most important metric first, group related visuals together, and keep supporting details secondary.'],
    ['Build with named elements', 'Use meaningful names for KPIs and charts. Descriptive labels help readers navigate the dashboard and make exported reports easier to interpret.'],
    ['Filters and layout', 'Use available filters to let viewers focus on relevant records. Test layout and scrolling on both desktop and mobile, especially when charts or tables are large.'],
    ['Before sharing', 'Check the dashboard at different screen sizes, verify every label, and confirm that the exported result contains only data you intend to share.']
  ]},
  { slug: 'exports', group: 'User guide', title: 'Exporting and sharing', summary: 'Choose an export and understand its trade-offs.', sections: [
    ['Choose the output', 'JSA has included dashboard and reporting export workflows during development. The exact available formats depend on the release you are using.'],
    ['Standalone HTML', 'A standalone interactive HTML export can be convenient to share, but it may embed the dataset in the exported file. Treat that file as data-bearing content and share it only with people authorized to see the data.'],
    ['Print and PDF', 'When print-friendly output is available, preview it before saving to PDF. Check page breaks, chart sizing, headings, and whether all required dashboard elements are visible.'],
    ['Verify the exported file', 'Open the output in a separate tab or browser and confirm that it behaves as expected. Never assume an export is correct solely because the download completed.']
  ]},
  { slug: 'troubleshooting', group: 'Reference', title: 'Troubleshooting', summary: 'A checklist for common workflow issues.', sections: [
    ['A file will not import', 'Confirm that the file is a supported format, is not empty, and is valid CSV or JSON. Try a smaller sample to determine whether the issue is file-specific.'],
    ['Results look unexpected', 'Review column types, blank values, filters, grouping fields, and the aggregation selected. Repeat the operation on a small known dataset to isolate the cause.'],
    ['A dashboard overflows on mobile', 'Try a narrower viewport and review whether the page or dashboard container can scroll. If the problem persists, report the browser, device size, JSA version, and steps to reproduce.'],
    ['Report a bug', `Open the project repository at ${REPO_URL} and create an issue if issue reporting is enabled. Include reproducible steps and a sanitized sample; do not upload private or sensitive data.`]
  ]},
  { slug: 'contributing', group: 'Reference', title: 'Contributing', summary: 'Help improve JSA with focused, reproducible contributions.', sections: [
    ['Before making a change', 'Review the existing project structure and the documentation for the version you intend to change. Keep changes focused and avoid mixing unrelated features in one contribution.'],
    ['Validate your work', 'Run the tests and production build available in the relevant project version. Report exactly what you ran and whether it passed; do not describe checks as passing unless you verified them.'],
    ['Open a useful issue or pull request', 'Explain the problem, expected behavior, actual behavior, and reproduction steps. Include screenshots only when they show the actual interface and do not expose private data.'],
    ['Project repository', `The application source and version history are maintained at ${REPO_URL}. This website is a separate project intended for product information and documentation.`]
  ]}
];

export const releaseNotes = [
  { version: 'v0.5.2', status: 'Latest known release', summary: 'A more focused exploration workflow.', changes: ['The “Explore your data” area was compacted and collapsed by default.', 'Recommended analyses were given greater prominence and can be expanded for more detail.'], note: 'This entry is based on project context available when the website was prepared. Confirm the version and details against the actual release folder and tested application before treating this as an audited changelog.' }
];

export const roadmap = [
  { status: 'Now', title: 'Make the product easier to understand', description: 'Improve the public landing page, documentation, feature explanations, and release transparency.' },
  { status: 'Next', title: 'Polish the end-to-end workflow', description: 'Continue improving the journey from dataset import through preparation, analysis, dashboards, and export.' },
  { status: 'Exploring', title: 'Interactive guided demo', description: 'Let visitors explore a sample workflow without needing to bring their own dataset.' },
  { status: 'Exploring', title: 'Developer-facing analytics library', description: 'Evaluate a reusable JavaScript API as a future direction. This is exploratory and should not be interpreted as a currently published npm package.' }
];
