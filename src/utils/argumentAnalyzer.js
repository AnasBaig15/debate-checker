export function analyzeArgument(argument) {
  const lowerArg = argument.toLowerCase()

  // Detect logical fallacies
  const fallacies = detectFallacies(argument, lowerArg)

  // Count evidence claims
  const evidenceCount = countEvidenceClaims(argument)

  // Assess evidence quality
  const evidenceQuality = assessEvidenceQuality(argument, lowerArg, evidenceCount)

  // Generate counter-arguments
  const counterArguments = generateCounterArguments(argument, lowerArg)

  // Extract assumptions
  const assumptions = extractAssumptions(argument, lowerArg)

  // Generate recommendations
  const recommendations = generateRecommendations(fallacies, evidenceCount, assumptions)

  // Calculate strength score
  const strengthScore = calculateStrengthScore(fallacies, evidenceCount, evidenceQuality)

  // Overall assessment
  const overallScore = getOverallScore(strengthScore)
  const assessmentText = getAssessmentText(strengthScore, fallacies.length, evidenceCount)

  return {
    fallacies,
    evidenceCount,
    evidenceQuality,
    counterArguments,
    assumptions,
    recommendations,
    strengthScore,
    overallScore,
    assessmentText
  }
}

function detectFallacies(argument, lowerArg) {
  const fallacies = []

  // Ad hominem
  if (/\b(you're|you are|you just|people like you|someone like you)\b.*\b(stupid|dumb|idiot|ignorant|fool|crazy)\b/i.test(argument)) {
    fallacies.push({
      name: 'Ad Hominem',
      description: 'Attacking the person making the argument rather than addressing the argument itself.',
      severity: 'High'
    })
  }

  // Appeal to authority
  if (/\b(expert said|scientist said|authority|famous|celebrity|influencer)\b.*\btherefore\b/i.test(argument)) {
    fallacies.push({
      name: 'Appeal to Authority',
      description: 'Using an authority figure as evidence without questioning credibility or expertise in this specific area.',
      severity: 'Medium'
    })
  }

  // Hasty generalization / Anecdotal evidence
  if (/\b(my|my friend|i know|my cousin|my grandfather|anecdote|one time)\b.*\b(therefore|so|thus|everyone|all|always)\b/i.test(argument)) {
    fallacies.push({
      name: 'Hasty Generalization',
      description: 'Drawing broad conclusions from limited personal experience or single anecdotes.',
      severity: 'High'
    })
  }

  // False cause (post hoc)
  if (/\b(because|since|caused|led to)\b.*\b(after|then|later)\b/i.test(argument) ||
      /\b(before|after)\b.*\b(caused|because of)\b/i.test(argument)) {
    fallacies.push({
      name: 'False Cause (Post Hoc)',
      description: 'Assuming that because B happened after A, A must have caused B.',
      severity: 'Medium'
    })
  }

  // Black and white thinking
  if (/\b(either|or|only|must be|can't be)\b.*\b(no other|nothing else|all or nothing)\b/i.test(argument)) {
    fallacies.push({
      name: 'False Dilemma',
      description: 'Presenting only two extreme options when many other options exist.',
      severity: 'Medium'
    })
  }

  // Circular reasoning
  if (/\b(because|since)\b.*(?=.*\1)/.test(argument.slice(0, 100))) {
    fallacies.push({
      name: 'Circular Reasoning',
      description: 'The conclusion is used to support the premise, creating a logical loop.',
      severity: 'High'
    })
  }

  // Straw man
  if (/\b(that's like saying|so you're saying|basically|you're claiming)\b/i.test(argument)) {
    fallacies.push({
      name: 'Straw Man',
      description: 'Misrepresenting the opposing view to make it easier to attack.',
      severity: 'Medium'
    })
  }

  // Appeal to emotion
  if (/\b(feel|emotional|tragic|heartbreaking|obviously wrong|must agree)\b/i.test(argument) &&
      !/\b(logically|research|evidence|shows|proves)\b/i.test(argument)) {
    fallacies.push({
      name: 'Appeal to Emotion',
      description: 'Using emotional language instead of logical reasoning to persuade.',
      severity: 'Low'
    })
  }

  return fallacies
}

function countEvidenceClaims(argument) {
  const evidencePatterns = [
    /\b(study|research|show|prove|demonstrate|found|discovered|data|statistics|survey|research\s+show)/gi,
    /\b(because|since|due to|caused by|result of)/gi,
    /\b(example|instance|case|for instance|for example)/gi,
    /\b(\d+%|\d+\s*(percent|people|studies))/gi
  ]

  let count = 0
  evidencePatterns.forEach(pattern => {
    const matches = argument.match(pattern)
    if (matches) count += matches.length
  })

  return Math.min(count, 5) // Cap at 5 for scoring purposes
}

function assessEvidenceQuality(argument, lowerArg, evidenceCount) {
  if (evidenceCount === 0) return 'None'
  if (evidenceCount === 1) return 'Limited'
  if (evidenceCount <= 3) return 'Moderate'
  return 'Substantial'
}

function generateCounterArguments(argument, lowerArg) {
  const counters = []

  if (/\b(always|never|everyone|no one|all)\b/i.test(argument)) {
    counters.push('Consider exceptions or cases where this doesn\'t apply universally.')
  }

  if (/\b(because|since)\b.*\b(therefore|so|thus)\b/i.test(argument) && /\b(anecdote|once|one time|i)\b/i.test(argument)) {
    counters.push('Is this based on one instance? Personal experiences may not represent broader patterns.')
  }

  if (/\b(common sense|obvious|clearly)\b/i.test(argument)) {
    counters.push('What seems obvious may not be backed by evidence. What\'s the empirical basis?')
  }

  if (/\b(they|those people|experts say)\b/i.test(argument)) {
    counters.push('Which specific experts or groups are you referring to? Provide citations.')
  }

  if (!/\b(research|study|data|evidence|report)\b/i.test(argument)) {
    counters.push('Consider adding empirical evidence, studies, or concrete data to support your claim.')
  }

  return counters.slice(0, 3)
}

function extractAssumptions(argument, lowerArg) {
  const assumptions = []

  if (/\b(must|should|have to|need to)\b/i.test(argument)) {
    assumptions.push('Assumes there is no alternative approach or solution.')
  }

  if (/\b(cause|because|reason)\b/i.test(argument)) {
    assumptions.push('Assumes a direct causal relationship between events.')
  }

  if (/\b(all|every|everyone|none)\b/i.test(argument)) {
    assumptions.push('Assumes uniformity or consistency across all cases.')
  }

  if (/\b(in the past|historically)\b/i.test(argument)) {
    assumptions.push('Assumes past patterns will continue unchanged into the future.')
  }

  if (!/\b(might|could|may|possibly)\b/i.test(argument)) {
    assumptions.push('Presents possibilities as certainties without acknowledging uncertainty.')
  }

  return assumptions.slice(0, 3)
}

function generateRecommendations(fallacies, evidenceCount, assumptions) {
  const recs = []

  if (fallacies.length > 0) {
    recs.push('Review and address the logical fallacies identified above.')
  }

  if (evidenceCount === 0) {
    recs.push('Add empirical evidence, studies, or data to strengthen your argument.')
  } else if (evidenceCount < 2) {
    recs.push('Provide more concrete evidence or examples to support your claims.')
  }

  if (assumptions.length > 0) {
    recs.push('Make your underlying assumptions explicit and justify them.')
  }

  recs.push('Test your argument against opposing viewpoints.')

  if (!/\b(however|but|although|while)\b/i.test(fallacies[0]?.description || '')) {
    recs.push('Acknowledge limitations and potential counterarguments in your position.')
  }

  return recs.slice(0, 4)
}

function calculateStrengthScore(fallacies, evidenceCount, evidenceQuality) {
  let score = 50 // Base score

  // Fallacies reduce score
  const highSeverityFallacies = fallacies.filter(f => f.severity === 'High').length
  const mediumSeverityFallacies = fallacies.filter(f => f.severity === 'Medium').length
  score -= highSeverityFallacies * 15
  score -= mediumSeverityFallacies * 8

  // Evidence increases score
  if (evidenceQuality === 'Substantial') score += 25
  else if (evidenceQuality === 'Moderate') score += 15
  else if (evidenceQuality === 'Limited') score += 8

  return Math.max(0, Math.min(100, score))
}

function getOverallScore(strengthScore) {
  if (strengthScore >= 75) return 'Strong'
  if (strengthScore >= 55) return 'Moderate'
  if (strengthScore >= 35) return 'Weak'
  return 'Very Weak'
}

function getAssessmentText(strengthScore, fallacyCount, evidenceCount) {
  if (strengthScore >= 75) {
    return 'Your argument is well-reasoned with solid evidence and minimal logical fallacies.'
  }
  if (strengthScore >= 55) {
    return 'Your argument has merit but could benefit from more evidence and addressing identified fallacies.'
  }
  if (strengthScore >= 35) {
    return 'Your argument needs significant strengthening. Focus on adding evidence and eliminating logical fallacies.'
  }
  return 'Your argument requires substantial revision. Add evidence, eliminate fallacies, and reconsider your claims.'
}
