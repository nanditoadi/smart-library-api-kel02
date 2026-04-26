import { ReportModel } from '../models/reportModel.js';

export const ReportController = {
    async getStats(req, res) {
        try {
            const stats = await ReportModel.getStats();
            res.json({
                total_books: parseInt(stats.total_books),
                total_authors: parseInt(stats.total_authors),
                total_categories: parseInt(stats.total_categories),
                active_loans: parseInt(stats.active_loans)
            });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};
