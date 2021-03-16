interface CommentIdentityHelperProps {
    PostSlug: string;
    Date: Date;
}

export const CommentIdentityHelper = ({ PostSlug, Date}: CommentIdentityHelperProps ): string => {
    return `[${PostSlug}]${Date.toLocaleDateString('en-GB')}-${Date.toLocaleTimeString('en-GB')}`;
} 