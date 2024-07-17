export const getTimeAgo = (dateString: Date): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffMonths / 12);

    if (diffYears > 0) {
        return `Created ${diffYears} year${diffYears > 1 ? 's' : ''} ago`;
    } else if (diffMonths > 0) {
        return `Created ${diffMonths} month${diffMonths > 1 ? 's' : ''} ago`;
    } else if (diffDays > 0) {
        return `Created ${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    } else {
        const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
        if (diffHours > 0) {
            return `Created ${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
        } else {
            const diffMinutes = Math.floor(diffTime / (1000 * 60));
            if (diffMinutes > 0) {
                return `Created ${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
            } else {
                const diffSeconds = Math.floor(diffTime / 1000);
                return `Created ${diffSeconds} second${diffSeconds > 1 ? 's' : ''} ago`;
            }
        }
    }
}
