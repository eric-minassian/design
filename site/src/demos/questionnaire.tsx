import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/questionnaire"

export const notes =
  "For when an agent is blocked on a decision only you can make. Each option should stand alone, and the one the agent recommends goes first."

export function SingleChoice() {
  return (
    <div className="w-full max-w-md rounded-xl border bg-card p-4 shadow-lg/5">
      <Questionnaire shortcuts="numbers">
        <QuestionnaireItem name="backoff">
          <QuestionnaireTitle>How should the backoff bug be handled?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice defaultChecked value="branch">
              Fix it in this branch
              <QuestionnaireChoiceDescription>
                One extra commit, and the retry tests cover it already.
              </QuestionnaireChoiceDescription>
            </QuestionnaireChoice>
            <QuestionnaireChoice value="follow-up">
              Open a follow-up
              <QuestionnaireChoiceDescription>
                Keeps this PR to the flaky test only.
              </QuestionnaireChoiceDescription>
            </QuestionnaireChoice>
            <QuestionnaireChoice value="ignore">
              Leave it
              <QuestionnaireChoiceDescription>
                The docs would need to change to match.
              </QuestionnaireChoiceDescription>
            </QuestionnaireChoice>
          </QuestionnaireChoices>
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnaireSubmit>Continue</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  )
}

export function MultiSelect() {
  return (
    <div className="w-full max-w-md rounded-xl border bg-card p-4 shadow-lg/5">
      <Questionnaire>
        <QuestionnaireItem multiple name="checks">
          <QuestionnaireTitle>Which checks should run before pushing?</QuestionnaireTitle>
          <QuestionnaireDescription>
            Anything you leave out still runs in CI.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice defaultChecked value="test">
              pnpm test
            </QuestionnaireChoice>
            <QuestionnaireChoice defaultChecked value="typecheck">
              pnpm typecheck
            </QuestionnaireChoice>
            <QuestionnaireChoice value="lint">pnpm lint</QuestionnaireChoice>
            <QuestionnaireChoice disabled value="e2e">
              pnpm e2e
              <QuestionnaireChoiceDescription>
                Needs Docker, which is not running.
              </QuestionnaireChoiceDescription>
            </QuestionnaireChoice>
          </QuestionnaireChoices>
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnaireSubmit>Run checks</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  )
}

export function Steps() {
  return (
    <div className="w-full max-w-md rounded-xl border bg-card p-4 shadow-lg/5">
      <Questionnaire shortcuts="numbers">
        <QuestionnaireProgress />
        <QuestionnaireItem name="base" required>
          <QuestionnaireTitle>Which branch should this target?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="main">main</QuestionnaireChoice>
            <QuestionnaireChoice value="release">release/2.4</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireItem name="title">
          <QuestionnaireTitle>What should the PR be called?</QuestionnaireTitle>
          <QuestionnaireDescription>Leave it empty to generate one.</QuestionnaireDescription>
          <QuestionnaireInput placeholder="fix: remove the race in the retry test" />
        </QuestionnaireItem>
        <QuestionnaireItem name="draft">
          <QuestionnaireTitle>Open it as a draft?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="draft">Draft</QuestionnaireChoice>
            <QuestionnaireChoice value="ready">Ready for review</QuestionnaireChoice>
          </QuestionnaireChoices>
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnairePrevious />
          <QuestionnaireSkip />
          <QuestionnaireNext />
          <QuestionnaireSubmit>Open PR</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  )
}
