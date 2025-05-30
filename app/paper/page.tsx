"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { FaGithub } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { InlineMath, BlockMath } from "react-katex";
import { span } from "framer-motion/client";


export default function PaperPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-slate-50 px-4 py-10 text-slate-800">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 w-full max-w-5xl text-center"
      >
        <h1 className="mb-2 text-4xl font-extrabold leading-tight md:text-5xl">
          Self‑Supervised Contrastive Learning <br className="hidden md:block" /> is Approximately Supervised Contrastive Learning
        </h1>
        <div className="mt-4 space-y-1 text-lg font-medium text-slate-700 md:text-2xl">
        <p>
          <a
            href="https://achleshwar.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Achleshwar Luthra
          </a>{" "}
          ·{" "}
          <a
            href="https://people.tamu.edu/~tianbao-yang/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Tianbao Yang
          </a>{" "}
          ·{" "}
          <a
            href="https://tomergalanti.github.io/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Tomer Galanti
          </a>
        </p>
        <p className="text-slate-500 font-medium">Texas A&M University</p>
      </div>
      
      </motion.div>

      {/* Resource Links: GitHub + PDF */}
      <div className="mb-12 flex flex-col md:flex-row items-center justify-center gap-8">
        {/* GitHub */}
        <a
          href="https://github.com/yourname/paper-code"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:scale-105 transition-transform"
        >
          <FaGithub className="w-16 h-16 text-slate-800 dark:text-white hover:text-black dark:hover:text-slate-300 transition-colors" />
          <span className="mt-2 text-md text-slate-600 dark:text-slate-300">Code</span>
        </a>

        {/* Paper */}
        <a
          href="https://arxiv.org/abs/2405.xxxxx"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:scale-105 transition-transform"
        >
          <FaFilePdf className="w-16 h-16 text-indigo-500 hover:text-indigo-700 transition-colors" />
          <span className="mt-2 text-md text-slate-600 dark:text-slate-300">Paper</span>
        </a>
      </div>

      {/*Motivation */}
      <Section title="Overview">
      <p>
        Despite its empirical success, the principles that make self‑supervised contrastive learning (CL)
        work remain poorly understood. Several works have observed that CL-trained models exhibit
        properties remarkably similar to supervised ones — such as well-formed clusters and
        transferable features — even though CL lacks any access to labels.
      </p>
      <div className="overflow-x-auto">
        <div className="inline-grid grid-cols-6 gap-2 mb-4">
          {/* Top row: DCL */}
          {["random", "epoch10", "epoch100", "epoch500", "epoch1000", "epoch1900"].map((tag) => (
            <img
              key={`dcl-${tag}`}
              src={`/images/umap/umap_imagenet_dcl_${tag}.png`}
              alt={`DCL ${tag}`}
              className="rounded shadow-sm"
            />
          ))}
        </div>

        <div className="inline-grid grid-cols-6 gap-2 mb-2">
          {/* Bottom row: NSCL */}
          {["random", "epoch10", "epoch100", "epoch500", "epoch1000", "epoch1900"].map((tag) => (
            <img
              key={`nscl-${tag}`}
              src={`/images/umap/umap_imagenet_nscl_${tag}.png`}
              alt={`NSCL ${tag}`}
              className="rounded shadow-sm"
            />
          ))}
        </div>

        <div className="grid grid-cols-6 text-center text-sm text-slate-500 mt-4">
          <span>Initialization</span>
          <span>Epoch 10</span>
          <span>Epoch 100</span>
          <span>Epoch 500</span>
          <span>Epoch 1000</span>
          <span>Epoch 2000</span>
        </div>

        {/* Caption */}
        <p className="text-md text-slate-500 text-center max-w-4xl mx-auto italic mt-4">
          <strong>DCL (top)</strong> forms semantic clusters without label supervision, while <strong>NSCL (bottom)</strong> yields tighter, more separable clusters,
          despite not explicitly pulling same-class samples together.
        </p>
      </div>
      <p>
        This puzzling behavior has raised a fundamental question:
      </p>

      <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 w-full max-w-3xl rounded-md border border-black bg-indigo-50 px-6 py-4 text-center text-lg italic text-slate-800 shadow-sm transition-shadow hover:shadow-md dark:border-white dark:bg-indigo-950 dark:text-slate-100"
        >
          <strong className="font-semibold">
            How does self-supervised CL learn representations similar to supervised learning, despite lacking explicit supervision?
          </strong>
        </motion.div>

        <p>
          Our work views self‑supervised contrastive learning (CL) through the lens of its
          supervised counterpart. We show that the popular <strong> CL objective implicitly optimizes a
          negatives‑only supervised contrastive loss (NSCL)</strong>. We also derive a
          new error bound that links the geometric properties of learned representations to downstream few‑shot performance. Extensive experiments
          confirm the theory and reveal how CL shapes the geometry of learned features.
        </p>

      </Section>

      {/* Key claims */}
      <Section title="Key claims">
        <Claim
          id="claim-1"
          title="1 · CL ≈ NSCL"
          body={
            <div className="space-y-3">
              <p>
                The InfoNCE-style loss 
                ({""}<span className="text-blue-600 font-medium">Decoupled Contrastive Loss</span>{""})
                used in self-supervised learning differs from the{" "}
                <span className="text-red-600 font-medium">Negatives-only Supervised Contrastive Loss</span>{" "}
                by at most O(1/C). In paractice, for a large number of semantic classes (C), the two losses are almost indistinguishable.
              </p>

              <BlockMath math={`0 \\leq \\left| \\mathcal{L}^{\\text{DCL}} - \\mathcal{L}^{\\text{NSCL}} \\right| \\leq \\log\\left(1 + \\frac{e^2 \\cdot n_{\\max}}{N - n_{\\max}}\\right)`} />
              <p className="text-xs text-slate-500 italic text-right mt-1">Theorem (1)</p>
              where, 

              <ul className="text-sm text-slate-600 list-disc list-inside">
                <div className="my-6 text-center rounded-md border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm dark:border-slate-700 dark:bg-slate-900 space-y-4">
                  
                  <BlockMath math={`
                  \\small
                  \\mathcal{L}^{\\mathrm{DCL}}(f) ~=~ -\\frac{1}{K^2N}\\sum^{K}_{l_1,l_2=1}\\sum_{i=1}^N
                  \\log \\Bigg(
                  \\frac{\\exp(\\mathrm{sim}(z^{l_1}_i, z^{l_2}_i))}
                      {\\sum^{K}_{l_3=1}{\\color{blue}\\sum_{j\\in [N]\\setminus \\{i\\}}} \\exp (\\mathrm{sim}(z^{l_1}_i, z^{l_3}_j))}
                  \\Bigg)
                  `} />
                  </div>
                  <div className="my-6 text-center rounded-md border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm dark:border-slate-700 dark:bg-slate-900 space-y-4">
                  <BlockMath math={`
                  \\small
                  \\mathcal{L}^{\\mathrm{NSCL}}(f) ~=~ -\\frac{1}{K^2N}\\sum^{K}_{l_1,l_2=1}\\sum_{i=1}^N
                  \\log \\Bigg(
                  \\frac{\\exp(\\mathrm{sim}(z^{l_1}_i, z^{l_2}_i))}
                      {\\sum^{K}_{l_3=1}{\\color{red}\\sum_{\\substack{j:~ y_j \\neq y_i}}} \\exp (\\mathrm{sim}(z^{l_1}_i, z^{l_3}_j))}
                  \\Bigg)
                  `} />
                  </div>

                <li>
                  <strong><InlineMath math={`n_{\\max}`} /></strong>: Max number of samples from any class
                </li>
                <li>
                  <strong><InlineMath math={`N`} /></strong>: Total number of samples in batch
                </li>
                <li>
                  <strong><InlineMath math={`K`} /></strong>: Total augmented versions of each sample
                </li>
                <li>
                  <strong><InlineMath math={`z^l_i ~=~ f(\\alpha_l(x_i))`} /></strong> where <strong><InlineMath math={`x_i`} /></strong> is an input image
                </li>
              </ul>
            </div>
          }
        />

        <Claim
          id="claim-2"
          title="2 · Recoverability of Labels"
          body={
            <div className="space-y-4">
              <p>
                A learned representation <strong><InlineMath math={`f`} /></strong> is considered <em>good</em> if it enables strong downstream performance.
                We formalize this by analyzing the <em>few-shot classification error</em> of a linear probe and NCCC. Our key insight is that this error is governed by two
                geometric variance terms, with the <strong>directional class-distance-normalized variance (d‑CDNV)</strong> playing the dominant role.
              </p>

              <p>
                As the number of labeled samples per class <InlineMath math={`m`} /> increases, the influence of the 
                {" "}
                      <a
                        href="https://arxiv.org/pdf/2112.15121"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline hover:text-blue-800"
                      >
                        standard CDNV 
                      </a>{" "}
                diminishes, leaving d‑CDNV
                as the main driver of performance. This leads to the central implication:
                <span className="block mt-1 text-center font-semibold text-blue-700">Low d‑CDNV ⇒ strong transfer from unlabeled to labeled data.</span>
              </p>

              Formally,

              <BlockMath math={`
              \\small
              \\mathrm{err}^{\\mathrm{LP}}_{m,D}(f)
              \\;\\le\\;
              \\mathrm{err}^{\\mathrm{NCC}}_{m,D}(f)
              \\;\\leq\\;
              (C'-1)\\left[c_1\\,\\text{Avg}_{i\\neq j}[\\tilde{V}_f(D_i,D_j)] + \\tfrac{c_2}{m}\\,\\text{Avg}_{i\\neq j}[V_{f}(D_i,D_j)] \\right]
              `} />
              <p className="text-xs text-slate-500 italic text-right mt-1">Proposition (1)</p>
              
              where,
              <div className="text-sm text-slate-600">
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <InlineMath math={`V_f(D_i, D_j) = \\frac{\\sigma_i^2}{\\|\\mu_i - \\mu_j\\|^2}`} /> is the <em>classwise CDNV</em>
                  </li>
                  <li>
                    <InlineMath math={`\\tilde{V}_f(D_i, D_j) = \\frac{\\sigma_{ij}^2}{\\|\\mu_i - \\mu_j\\|_2^2}`} />, where 
                    <InlineMath math={`\\sigma_{ij}^{2} = \\operatorname{Var}_{x \\sim D_i} [ \\langle f(x) - \\mu_i, u_{ij} \\rangle ]`} />, and 
                    <InlineMath math={`u_{ij} = \\frac{\\mu_i - \\mu_j}{\\|\\mu_i - \\mu_j\\|_2^2}`} /> is the <em>directional unit vector</em>
                  </li>
                  <li><InlineMath math={`D_i`} />: Class-conditional distribution for class <InlineMath math={`i`} /></li>
                  <li><InlineMath math={`c_1`} /> and <InlineMath math={`c_2`} />: Constants derived in Appendix C</li>
                  <li><InlineMath math={`m`} />: Number of labeled samples per class (i.e., number of shots)</li>
                  <li><InlineMath math={`C'`} />: Total number of classes</li>
                </ul>
              </div>
            </div>
          }
        />

        <Claim
          id="claim-3"
          title="3 · Collapse + Symmetry in NSCL"
          body={
            <div>
              <p>
                <strong>NSCL Minimizers Yield Collapse + Simplex ETF Geometry.</strong>{" "}
                At the global minimum of the NSCL loss, representations exhibit:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2 text-base text-slate-800">
                <li>
                  <strong>(i) Augmentation Collapse:</strong> All augmented views of a sample map to the same point.
                </li>
                <li>
                  <strong>(ii) Within-Class Collapse:</strong> All samples from the same class share an identical embedding.
                </li>
                <li>
                  <strong>(iii) Simplex ETF Geometry:</strong> Class means are maximally separated, forming a symmetric
                  equiangular tight frame in feature space.
                </li>
              </ul>
              <p className="text-xs text-slate-500 italic text-right mt-1">Theorem (2)</p>
              <p>
              Theorem (2) implies that <strong><InlineMath math={`\\mathcal{L}^{\\mathrm{NSCL}}`}/></strong> yields perfectly clustered representations. 
              </p>
            </div>
          }
        />



        </Section>

      {/* Experiments */}
      <Section title="Experiments at a glance">
        <ExperimentCard
          title="Tracking the losses"
          bullets={[
            "DCL and NSCL losses remain tightly coupled across 2k training epochs on CIFAR-10, CIFAR‑100, and mini‑ImageNet.",
            "The empirical gap shrinks as the number of classes grows (noticeable across datasets)",
          ]}
          imgSrcs={[
            "/images/exp1/cifar10_simclr_losses.png",
            "/images/exp1/cifar100_simclr_losses.png",
            "/images/exp1/imagenet_simclr_losses.png"
            ]}
            imgAlts={["(a) CIFAR10",
              "(b) CIFAR100",
              "(c) mini-ImageNet"
            ]}
        />
        <ExperimentCard
          title="Few‑shot performance"
          bullets={[
            "For NSCL, 1‑shot linear probing accuracy exceeds 70 % on mini‑ImageNet",
            "DCL achieves competitive performance, with 100-shot linear probing accuracy exceeding 70 % on mini‑ImageNet.",
          ]}
          imgSrcs={["/images/exp3/few_shot_error_analysis_cifar10.png",
            "/images/exp3/few_shot_error_analysis_cifar100.png",
            "/images/exp3/few_shot_error_analysis_imagenet.png"
            ]}
          imgAlts={["(a) CIFAR10",
            "(b) CIFAR100",
            "(c) mini-ImageNet"
          ]}
        />
        <ExperimentCard
          title="Error bound"
          bullets={[
            "The two-way m-shot NCCC and LP errors are bounded as per Proposition (1)",
            "The error bound goes down to 0.25 for CIFAR-10 at a very large m,  shown in red"
          ]}
          imgSrcs={["/images/error/error_analysis_cifar10.png",
            "/images/error/error_analysis_cifar100.png",
            "/images/error/error_analysis_imagenet.png"
            ]}
          imgAlts={["(a) CIFAR10",
            "(b) CIFAR100",
            "(c) mini-ImageNet"
          ]}
        />
        <ExperimentCard
          title="Geometry of learned representations"
          bullets={[
            "Directional CDNV drops by ~10× during CL training, while standard CDNV decreases only modestly",
            "For NSCL, both CDNV and directional CDNV drop significantly",
          ]}
          imgSrcs={["/images/cdnv/cifar10_cdnv.png",
            "/images/cdnv/cifar100_cdnv.png",
            "/images/cdnv/imagenet_cdnv.png"
            ]}
          imgAlts={["(a) CIFAR10",
            "(b) CIFAR100",
            "(c) mini-ImageNet"
          ]}
        />
      </Section>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-16"
      >
        {/* Insert one of the options above here */}
        <Section title="Final Remarks">
          <p className="text-lg text-slate-700">
            Our work takes several steps towards better understanding of self-supervised learning, both theoretically and empirically.
            We provide a principled explanation for CL’s success in few-shot learning and identify the geometric structure that underlies high-performing representations.
          </p>
        </Section>
      </motion.div>

      {/* Call to action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 text-center"
      >
        <p className="mb-6 text-lg font-medium">
          Interested in the details? Dive into the full paper or explore the code.
        </p>
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
          <Button variant="default" size="lg" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Read the Paper (PDF)
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              View Code on GitHub
            </a>
          </Button>
        </div>
      </motion.div>
      <footer className="mt-20 border-t pt-6 text-center text-sm text-slate-500">
        © 2025 Built with 🧠 and ☕. <br />
        For questions or collaborations, reach out at <a href="mailto:luthra@tamu.edu" className="underline">luthra@tamu.edu</a> and <a href="mailto:galanti@tamu.edu" className="underline">galanti@tamu.edu</a>
      </footer>
    </div>
  );
}

/** Helper Components */
type SectionProps = {
    title: string;
    children: ReactNode;
  };

function Section({ title, children }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-14 w-full max-w-4xl"
    >
      <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
      <div className="space-y-4 text-base leading-relaxed md:text-lg">{children}</div>
    </motion.section>
  );
}

type ClaimProps = {
    id: string;
    title: string;
    body: ReactNode;
  };
  
  function Claim({ id, title, body }: ClaimProps) {
  return (
    <Card id={id} className="mb-6 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-slate-700">{body}</CardContent>
    </Card>
  );
}

type ExperimentCardProps = {
  title: string;
  bullets: string[];
  imgAlts: string[];
  imgSrcs: string[]; // list of image paths
};

function ExperimentCard({ title, bullets, imgSrcs, imgAlts }: ExperimentCardProps) {
  return (
    <Card className="mb-8 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <ul className="list-disc pl-5 text-slate-700">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        {imgSrcs.length > 0 && (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
    {imgSrcs.map((src, idx) => (
      <div key={idx} className="flex flex-col items-center">
        <img
          src={src}
          alt={imgAlts[idx] || `Figure ${idx + 1}`}
          className="w-full max-w-[250px] rounded-md border border-slate-200 shadow-sm transform transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <span className="mt-2 text-xs text-slate-600 text-center">{imgAlts[idx] || `Figure ${idx + 1}`}</span>
      </div>
    ))}
  </div>
)}

      </CardContent>
    </Card>
  );
}
