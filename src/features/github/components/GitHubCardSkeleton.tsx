import GitHubCard from "./GitHubCard";

type GitHubCardSkeletonVariant =
  | "activity"
  | "language"
  | "profile"
  | "ranking"
  | "repository";

interface GitHubCardSkeletonProps {
  label: string;
  count?: number;
  className?: string;
  variant?: GitHubCardSkeletonVariant;
}

interface SkeletonBoxProps {
  className: string;
  tone?: "default" | "muted";
}

const SkeletonBox = ({
  className,
  tone = "default",
}: SkeletonBoxProps) => {
  const color =
    tone === "muted"
      ? "bg-gray-100 dark:bg-gray-900"
      : "bg-gray-200 dark:bg-gray-800";

  return <div className={`${className} ${color}`} />;
};

const RankingSkeleton = ({
  className,
  count,
}: Pick<GitHubCardSkeletonProps, "className" | "count">) => {
  return (
    <div className={className ?? "grid grid-cols-1 gap-5"}>
      {Array.from({ length: count ?? 3 }, (_, index) => (
        <GitHubCard
          key={index}
          className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center"
        >
          <SkeletonBox className="h-12 w-12 shrink-0 rounded-2xl" />

          <SkeletonBox className="h-20 w-20 shrink-0 rounded-3xl" />

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <SkeletonBox className="h-6 w-40 max-w-full rounded-full" />
              <SkeletonBox className="h-4 w-24 rounded-full" />
            </div>

            <SkeletonBox className="mt-3 h-4 w-full rounded-full" />
            <SkeletonBox className="mt-2 h-4 w-2/3 rounded-full" />
            <SkeletonBox className="mt-3 h-4 w-32 rounded-full" />

            <div className="mt-4 flex flex-wrap gap-3">
              <SkeletonBox className="h-7 w-28 rounded-full" tone="muted" />
              <SkeletonBox className="h-7 w-28 rounded-full" tone="muted" />
              <SkeletonBox className="h-7 w-24 rounded-full" tone="muted" />
            </div>
          </div>

          <SkeletonBox className="h-11 w-full rounded-full sm:w-28" />
        </GitHubCard>
      ))}
    </div>
  );
};

const ProfileSkeleton = () => {
  return (
    <GitHubCard as="section" className="mx-auto w-full max-w-2xl p-6">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <SkeletonBox className="h-24 w-24 shrink-0 rounded-full" />

          <div className="w-full min-w-0 sm:w-80">
            <SkeletonBox className="h-7 w-48 max-w-full rounded-full" />
            <SkeletonBox className="mt-2 h-4 w-28 rounded-full" />
            <SkeletonBox className="mt-5 h-4 w-full rounded-full" />
            <SkeletonBox className="mt-2 h-4 w-11/12 rounded-full" />
            <SkeletonBox className="mt-2 h-4 w-2/3 rounded-full" />
          </div>
        </div>

        <SkeletonBox className="h-10 w-32 rounded-full" />
      </div>

      <div className="mx-auto mt-6 grid w-full max-w-xl grid-cols-3 gap-3">
        {Array.from({ length: 3 }, (_, index) => (
          <div
            key={index}
            className="rounded-2xl bg-gray-50 p-4 dark:bg-black"
          >
            <SkeletonBox className="mx-auto h-7 w-12 rounded-full" />
            <SkeletonBox
              className="mx-auto mt-2 h-3 w-16 rounded-full"
              tone="muted"
            />
          </div>
        ))}
      </div>
    </GitHubCard>
  );
};

const RepositorySkeleton = ({ count }: Pick<GitHubCardSkeletonProps, "count">) => {
  return (
    <GitHubCard as="section" className="mx-auto w-full max-w-2xl p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <SkeletonBox className="h-6 w-36 rounded-full" />
        <SkeletonBox className="h-10 w-32 rounded-full" />
      </div>

      <div className="mt-5 flex flex-col gap-4">
        {Array.from({ length: count ?? 3 }, (_, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-black"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0 flex-1">
                <SkeletonBox className="h-5 w-48 max-w-full rounded-full" />
                <SkeletonBox className="mt-2 h-4 w-64 max-w-full rounded-full" />
              </div>

              <SkeletonBox className="h-7 w-20 shrink-0 rounded-full" />
            </div>

            <SkeletonBox className="mt-4 h-4 w-full rounded-full" />
            <SkeletonBox className="mt-2 h-4 w-3/4 rounded-full" />

            <div className="mt-4 flex flex-wrap gap-4">
              <SkeletonBox className="h-4 w-16 rounded-full" tone="muted" />
              <SkeletonBox className="h-4 w-16 rounded-full" tone="muted" />
            </div>

            <SkeletonBox className="mt-4 h-3 w-32 rounded-full" tone="muted" />
          </div>
        ))}
      </div>
    </GitHubCard>
  );
};

const SummaryStatSkeleton = ({ count }: { count: number }) => {
  return (
    <section
      className={
        count === 4
          ? "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          : "mx-auto grid w-full max-w-2xl gap-4 md:grid-cols-3"
      }
    >
      {Array.from({ length: count }, (_, index) => (
        <GitHubCard as="article" key={index} radius="2xl" className="p-5">
          <SkeletonBox className="h-4 w-28 max-w-full rounded-full" />
          <SkeletonBox className="mt-3 h-8 w-20 rounded-full" />
        </GitHubCard>
      ))}
    </section>
  );
};

const DoughnutChartSkeleton = ({ centered = false }: { centered?: boolean }) => {
  return (
    <GitHubCard
      as="section"
      className={`${centered ? "mx-auto w-full max-w-2xl " : ""}p-6`}
    >
      <SkeletonBox className="h-6 w-36 rounded-full" />

      <div className="mt-6 flex h-72 flex-col items-center justify-center gap-6">
        <div className="relative h-44 w-44 rounded-full border-[32px] border-gray-200 dark:border-gray-800">
          <div className="absolute inset-8 rounded-full bg-white dark:bg-gray-950" />
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {Array.from({ length: 4 }, (_, index) => (
            <SkeletonBox
              key={index}
              className="h-3 w-20 rounded-full"
              tone="muted"
            />
          ))}
        </div>
      </div>
    </GitHubCard>
  );
};

const RankingPanelSkeleton = ({ centered = false }: { centered?: boolean }) => {
  return (
    <GitHubCard
      as="section"
      className={`${centered ? "mx-auto w-full max-w-2xl " : ""}p-6`}
    >
      <SkeletonBox className="h-6 w-36 rounded-full" />

      <div className="mt-5 flex flex-col gap-4">
        {Array.from({ length: 4 }, (_, index) => (
          <div
            key={index}
            className="rounded-2xl bg-gray-50 p-4 dark:bg-gray-900"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0 flex-1">
                <SkeletonBox className="h-5 w-40 max-w-full rounded-full" />
                <SkeletonBox className="mt-2 h-4 w-20 rounded-full" />
              </div>

              <SkeletonBox className="h-6 w-12 rounded-full" />
            </div>

            {centered && (
              <SkeletonBox className="mt-4 h-2 w-full rounded-full" />
            )}
          </div>
        ))}
      </div>
    </GitHubCard>
  );
};

const LanguageSkeleton = () => {
  return (
    <div className="flex flex-col gap-6">
      <SummaryStatSkeleton count={3} />
      <DoughnutChartSkeleton centered />
      <RankingPanelSkeleton centered />
    </div>
  );
};

const ActivitySkeleton = () => {
  return (
    <div className="flex flex-col gap-6">
      <SummaryStatSkeleton count={4} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <DoughnutChartSkeleton />
        <RankingPanelSkeleton />
      </div>

      <GitHubCard as="section" className="p-6">
        <SkeletonBox className="h-6 w-36 rounded-full" />

        <div className="mt-5 flex flex-col gap-3">
          {Array.from({ length: 4 }, (_, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gray-50 p-4 dark:bg-gray-900"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0 flex-1">
                  <SkeletonBox className="h-5 w-44 max-w-full rounded-full" />
                  <SkeletonBox className="mt-2 h-4 w-60 max-w-full rounded-full" />
                </div>

                <SkeletonBox className="h-4 w-24 rounded-full" />
              </div>

              <SkeletonBox className="mt-4 h-4 w-40 rounded-full" />
            </div>
          ))}
        </div>
      </GitHubCard>
    </div>
  );
};

const GitHubCardSkeleton = ({
  label,
  count = 1,
  className = "grid grid-cols-1 gap-5",
  variant = "ranking",
}: GitHubCardSkeletonProps) => {
  const renderSkeleton = () => {
    switch (variant) {
      case "activity":
        return <ActivitySkeleton />;
      case "language":
        return <LanguageSkeleton />;
      case "profile":
        return <ProfileSkeleton />;
      case "repository":
        return <RepositorySkeleton count={count} />;
      case "ranking":
      default:
        return <RankingSkeleton className={className} count={count} />;
    }
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className="animate-pulse motion-reduce:animate-none"
    >
      <span className="sr-only">{label}</span>

      <div aria-hidden="true">{renderSkeleton()}</div>
    </div>
  );
};

export default GitHubCardSkeleton;
